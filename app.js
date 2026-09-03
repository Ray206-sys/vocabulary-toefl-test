// Game State
let gameState = {
    currentQuestionIndex: 0,
    correctAnswers: 0,
    usedQuestionIds: new Set(),
    shuffledData: [],
    currentQuestion: null,
    answered: false
};

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Initialize Game
function initializeGame() {
    gameState.currentQuestionIndex = 0;
    gameState.correctAnswers = 0;
    gameState.usedQuestionIds.clear();
    gameState.shuffledData = [...vocabularyData].sort(() => Math.random() - 0.5);
    gameState.answered = false;
    showScreen('questionScreen');
    loadNextQuestion();
}

// Load Next Question
function loadNextQuestion() {
    const total = gameState.shuffledData.length;

    if (gameState.currentQuestionIndex >= total) {
        showResult();
        return;
    }

    gameState.answered = false;
    gameState.currentQuestion = gameState.shuffledData[gameState.currentQuestionIndex];

    showScreen('questionScreen');

    document.getElementById('progressText').textContent =
        `Question ${gameState.currentQuestionIndex + 1} / ${total}`;

    document.getElementById('questionWord').textContent = gameState.currentQuestion.word;

    generateChoices();

    document.querySelectorAll('.choice-button').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect');
    });
}

// Generate Multiple Choice Options
function generateChoices() {
    const correctAnswer = gameState.currentQuestion.meaning;
    const choices = [correctAnswer];

    const otherWords = gameState.shuffledData.filter(word => word.id !== gameState.currentQuestion.id);

    while (choices.length < 4) {
        const randomWord = otherWords[Math.floor(Math.random() * otherWords.length)];
        if (!choices.includes(randomWord.meaning)) {
            choices.push(randomWord.meaning);
        }
    }

    const shuffledChoices = choices.sort(() => Math.random() - 0.5);

    const buttons = document.querySelectorAll('.choice-button');
    buttons.forEach((button, index) => {
        button.textContent = shuffledChoices[index];
        button.dataset.meaning = shuffledChoices[index];
        button.onclick = () => checkAnswer(button, shuffledChoices[index]);
    });
}

// Check Answer
function checkAnswer(button, selectedMeaning) {
    if (gameState.answered) return;

    gameState.answered = true;

    const isCorrect = selectedMeaning === gameState.currentQuestion.meaning;

    document.querySelectorAll('.choice-button').forEach(btn => {
        btn.disabled = true;
    });

    if (isCorrect) {
        button.classList.add('correct');
        gameState.correctAnswers++;
    } else {
        button.classList.add('incorrect');
        document.querySelectorAll('.choice-button').forEach(btn => {
            if (btn.dataset.meaning === gameState.currentQuestion.meaning) {
                btn.classList.add('correct');
            }
        });
    }

    setTimeout(() => {
        showExample();
    }, 500);
}

// Show Example Sentence
function showExample() {
    document.getElementById('exampleWord').textContent = gameState.currentQuestion.word;
    document.getElementById('exampleDefinition').textContent =
        `${gameState.currentQuestion.partOfSpeech} ${gameState.currentQuestion.meaning}`;
    document.getElementById('exampleSentence').textContent = gameState.currentQuestion.exampleSentence;

    showScreen('exampleScreen');
}

// Handle Click on Example Screen
function handleExampleScreenClick() {
    if (!gameState.answered) return;
    gameState.currentQuestionIndex++;
    loadNextQuestion();
}

// Show Result
function showResult() {
    const total = gameState.shuffledData.length;
    document.getElementById('resultText').textContent = `${gameState.correctAnswers} / ${total}`;
    showScreen('resultScreen');
}

// Handle Click on Result Screen
function handleResultScreenClick() {
    showScreen('homeScreen');
    initializeGame();
}

// Initialize all event listeners
function initializeEventListeners() {
    const exampleScreen = document.getElementById('exampleScreen');
    if (exampleScreen) {
        exampleScreen.removeEventListener('click', handleExampleScreenClick);
        exampleScreen.addEventListener('click', handleExampleScreenClick);
    }

    const resultScreen = document.getElementById('resultScreen');
    if (resultScreen) {
        resultScreen.removeEventListener('click', handleResultScreenClick);
        resultScreen.addEventListener('click', handleResultScreenClick);
    }

    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.addEventListener('click', () => {
            initializeGame();
        });
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    showScreen('homeScreen');
});

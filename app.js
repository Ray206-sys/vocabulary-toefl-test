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
    if (gameState.currentQuestionIndex >= 2000) {
        showResult();
        return;
    }

    gameState.answered = false;
    gameState.currentQuestion = gameState.shuffledData[gameState.currentQuestionIndex % gameState.shuffledData.length];

    // Update progress
    document.getElementById('progressText').textContent = 
        `Question ${gameState.currentQuestionIndex + 1} / 2000`;

    // Display question word
    document.getElementById('questionWord').textContent = gameState.currentQuestion.word;

    // Generate and shuffle choices
    generateChoices();
    
    // Reset button styles
    document.querySelectorAll('.choice-button').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect');
    });
}

// Generate Multiple Choice Options
function generateChoices() {
    const correctAnswer = gameState.currentQuestion.meaning;
    const choices = [correctAnswer];

    // Get random incorrect answers from other words
    const otherWords = gameState.shuffledData.filter(word => word.id !== gameState.currentQuestion.id);
    
    while (choices.length < 4) {
        const randomWord = otherWords[Math.floor(Math.random() * otherWords.length)];
        if (!choices.includes(randomWord.meaning)) {
            choices.push(randomWord.meaning);
        }
    }

    // Shuffle choices
    const shuffledChoices = choices.sort(() => Math.random() - 0.5);

    // Display choices
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

    // Disable all buttons
    document.querySelectorAll('.choice-button').forEach(btn => {
        btn.disabled = true;
    });

    // Show result
    if (isCorrect) {
        button.classList.add('correct');
        gameState.correctAnswers++;
    } else {
        button.classList.add('incorrect');
        // Show correct answer
        document.querySelectorAll('.choice-button').forEach(btn => {
            if (btn.dataset.meaning === gameState.currentQuestion.meaning) {
                btn.classList.add('correct');
            }
        });
    }

    // Show example after a short delay
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

// Handle Click on Example Screen - Using event delegation for reliability
function handleExampleScreenClick() {
    if (!gameState.answered) return; // Only allow click after question is answered
    gameState.currentQuestionIndex++;
    loadNextQuestion();
}

// Show Result
function showResult() {
    document.getElementById('resultText').textContent = `${gameState.correctAnswers} / 2000`;
    showScreen('resultScreen');
}

// Handle Click on Result Screen
function handleResultScreenClick() {
    showScreen('homeScreen');
    initializeGame();
}

// Initialize all event listeners when DOM is ready
function initializeEventListeners() {
    // Example screen click
    const exampleScreen = document.getElementById('exampleScreen');
    if (exampleScreen) {
        exampleScreen.removeEventListener('click', handleExampleScreenClick);
        exampleScreen.addEventListener('click', handleExampleScreenClick);
    }

    // Result screen click
    const resultScreen = document.getElementById('resultScreen');
    if (resultScreen) {
        resultScreen.removeEventListener('click', handleResultScreenClick);
        resultScreen.addEventListener('click', handleResultScreenClick);
    }

    // Start button click
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

// Fallback for older browsers
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEventListeners);
} else {
    initializeEventListeners();
}

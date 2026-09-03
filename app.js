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

    // ★修正1: 問題画面に戻す処理が抜けていたため追加
    showScreen('questionScreen');

    // Update progress
    document.getElementById('progressText').textContent =
        `Question ${gameState.currentQuestionIndex + 1} / ${total}`;

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

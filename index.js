const maxAttempts = 3;
let attempts = 0;
let correctAnswer = 0;
let gameStarted = false;
function startGame() {
    attempts = 0;
    correctAnswer = Math.floor(Math.random() * 10) + 1;
    document.getElementById('message').innerText = "";
    document.getElementById('attempts').innerText = "Attempts left: " + maxAttempts;
    gameStarted = true;
    playGame();
}
function playGame() {
    if (!gameStarted)

        return;

    let guess = window.prompt("Enter your guess (between 1 and 10):");
    if (isNaN(guess) || guess < 1 || guess > 10) {
        alert("Please enter a number between 1 and 10.");
        return;
    }
    attempts++;
    if (guess === correctAnswer) {
        document.getElementById('message').innerText = "Congratulations! You guessed the correct number!";
        window.alert("You won! The correct number was " + correctAnswer);
        gameStarted = false;
    } else if (attempts < maxAttempts) {
        if (guess > correctAnswer) {
            document.getElementById('message').innerText = "Too high! Try again.";
        } else {
            document.getElementById('message').innerText = "Too low! Try again.";
        }
        document.getElementById('attempts').innerText = "Attempts left: " + (maxAttempts - attempts);
        playGame();
    } else {
        document.getElementById('message').innerText = "Sorry, you're out of attempts! The correct number was " + correctAnswer + ".";
        window.alert("Game over! The correct number was " + correctAnswer);
        gameStarted = false;
    }
}

document.getElementById('start-button').addEventListener('click', startGame);




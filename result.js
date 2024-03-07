document.addEventListener("DOMContentLoaded", function() {
    const resultMessageElement = document.getElementById('result-message');
    const resultContainer = document.querySelector('.result-container');

    // Retrieve the result message from local storage
    const gameResult = localStorage.getItem('gameResult');
    // Display the result message
    if (gameResult) {
        resultMessageElement.textContent = gameResult;
    }

    // Create "Play Again" button
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.classList.add('play-again-button'); // Add a class to the button
    playAgainButton.addEventListener('click', resetGame);
    resultContainer.appendChild(playAgainButton);

    function resetGame() {
        // Clear the local storage
        localStorage.removeItem('gameResult');
        // Redirect to the game page
        window.location.href = 'index.html'; // Change 'index.html' to your game page
    }
});

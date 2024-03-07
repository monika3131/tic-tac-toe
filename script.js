document.addEventListener("DOMContentLoaded", function() {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let gameActive = true;
    
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    function handleCellClick(event) {
        const clickedCell = event.target;
        const clickedCellIndex = Array.from(cells).indexOf(clickedCell);

        if (gameActive && !clickedCell.textContent) {
            clickedCell.textContent = currentPlayer;
            if (checkWin() || checkDraw()) {
                gameActive = false;
                if (checkWin()) {
                    const winner = currentPlayer === 'X' ? 'Player X' : 'Player O';
                    displayResult(`${winner} wins!`);
                } else {
                    displayResult("It's a draw!");
                }
                return;
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    function checkWin() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return cells[a].textContent &&
                   cells[a].textContent === cells[b].textContent &&
                   cells[a].textContent === cells[c].textContent;
        });
    }

    function checkDraw() {
        return [...cells].every(cell => cell.textContent);
    }
    
    function displayResult(message) {
        // Store the result message in local storage
        localStorage.setItem('gameResult', message);
        // Redirect to the result page
        window.location.href = 'result.html';
    }
});

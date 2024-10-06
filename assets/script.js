const data = [
    {
        question: "How are you?",
        options: ["I am fine", "I'm not good"],
        responses: ["Great!", "Why, what happened?"],
        nextQuestions: [1, 1]
    },
    {
        question: "Do you want to play Tic-Tac-Toe?",
        options: ["Yes", "No"],
        responses: ["Let's start!", "Okay, maybe next time."],
        nextQuestions: [2, 2]
    },
    {
        question: "When do you want to play?",
        options: ["Now", "Later"],
        responses: ["Let's start!", "Okay, I'll wait!"],
        nextQuestions: [0, 0]
    }
];

let currentQuestionIndex = 0;
const buttons = [document.getElementById("opt-1"), document.getElementById("opt-2")];

// Modal elements
const modal = document.getElementById("tic-tac-toe-modal");
const closeButton = document.getElementById("close-modal");
const gameBoard = document.getElementById("game-board");
const gameStatus = document.getElementById("game-status");

const players = ["X", "O"];
let currentPlayer = 0;
let board = Array(9).fill(null);
let gameActive = true;

function showQuestion() {
    const question = data[currentQuestionIndex];
    typeText(question.question, () => {
        showOptions(question);
    });
}

function typeText(text, callback) {
    const output = document.getElementById("robot-text");
    output.innerText = "";
    let index = 0;

    function type() {
        if (index < text.length) {
            output.textContent += text.charAt(index++);
            setTimeout(type, 100);
        } else {
            callback();
        }
    }
    type();
}

function showOptions(question) {
    buttons.forEach((button, index) => {
        button.style.display = "block";
        button.innerText = question.options[index];
        button.onclick = () => handleResponse(index);
    });
}

function handleResponse(optionIndex) {
    buttons.forEach(button => button.style.display = "none");

    const question = data[currentQuestionIndex];
    const response = question.responses[optionIndex];
    typeText(response, () => {
        // Check if the selected option is "Yes"
        if (question.options[optionIndex] === "Yes") {
            // Open the modal without changing the current question
            setTimeout(() => {
                hideConversationElements(); // Hide robot text and options
                modal.style.display = "flex";
                initializeGame();
            }, 1500);
        } else {
            // If the response was "No", proceed to the next question
            currentQuestionIndex = question.nextQuestions[optionIndex];
            if (currentQuestionIndex < data.length) {
                setTimeout(() => {
                    typeText(data[currentQuestionIndex].question, () => {
                        showOptions(data[currentQuestionIndex]);
                    });
                }, 1000);
            } else {
                typeText("Our conversation has ended.", () => {});
            }
        }
    });
}

function hideConversationElements() {
    document.getElementById("robot-text").style.display = "none";
    buttons.forEach(button => button.style.display = "none");
}

function showConversationElements() {
    document.getElementById("robot-text").style.display = "block";
    showOptions(data[currentQuestionIndex]); // Show options again
}

function initializeGame() {
    gameBoard.innerHTML = "";
    board.fill(null);
    gameActive = true;
    gameStatus.innerText = `Current Player: ${players[currentPlayer]}`;

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", () => handleCellClick(i));
        gameBoard.appendChild(cell);
    }
}

function handleCellClick(index) {
    if (board[index] || !gameActive) return;

    board[index] = players[currentPlayer];
    renderBoard();
    checkWinner();

    if (gameActive) {
        currentPlayer = (currentPlayer + 1) % 2;
        gameStatus.innerText = `Current Player: ${players[currentPlayer]}`;
        if (currentPlayer === 1) {
            setTimeout(aiMove, 500);
        }
    }
}

function aiMove() {
    let availableCells = board.map((value, index) => value === null ? index : null).filter(v => v !== null);
    if (availableCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableCells.length);
        const aiCell = availableCells[randomIndex];
        board[aiCell] = players[currentPlayer];
        renderBoard();
        checkWinner();

        if (gameActive) {
            currentPlayer = (currentPlayer + 1) % 2;
            gameStatus.innerText = `Current Player: ${players[currentPlayer]}`;
        }
    }
}

function renderBoard() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        cell.innerText = board[index];
    });
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameStatus.innerText = `Player ${board[a]} Wins!`;
            gameActive = false;
            setTimeout(() => endGame(board[a]), 1000);
            return;
        }
    }

    if (!board.includes(null)) {
        gameStatus.innerText = "It's a Draw!";
        gameActive = false;
        setTimeout(() => endGame(null), 1000);
    }
}

function endGame(winner) {
    modal.style.display = "none"; // Close the modal
    showConversationElements(); // Show robot text and options again

    // Delay the response message for 2 seconds
    setTimeout(() => {
        let response;
        if (winner) {
            const winningResponses = [
                "Easy win! Want to try again?",
                "Too easy! Let's go again!",
                "You won't win next time!"
            ];
            face_changer("Happy");
            response = winningResponses[Math.floor(Math.random() * winningResponses.length)];
        } else {
            const losingResponses = [
                "That was a tough game!",
                "You got lucky this time!",
                "Well played! Want to try again?"
            ];
            face_changer("Angry");
            response = losingResponses[Math.floor(Math.random() * losingResponses.length)];
        }
        
        typeText(response, () => {
            currentQuestionIndex = 0; // Restart conversation
            showQuestion(); // Show next question
        });
    }, 2000); // 2000 milliseconds = 2 seconds
}

closeButton.onclick = function() {
    modal.style.display = "none";
    showConversationElements(); // Show robot text and options when modal closes
};

function startConversation() {
    showQuestion();
}

startConversation();



window.addEventListener('load', function() {
    setTimeout(function() {
        // Get the current rotation angle of the logo
        const logo = document.getElementById('loading-logo');
        const computedStyle = window.getComputedStyle(logo);
        const matrix = new WebKitCSSMatrix(computedStyle.transform);

        // Get the rotation angle in degrees from the matrix
        const currentRotation = Math.atan2(matrix.m21, matrix.m11) * (180 / Math.PI);
        // If the rotation is negative, adjust it
        const adjustedRotation = (currentRotation < 0 ? currentRotation + 360 : currentRotation) + 'deg';
        
        // Set the current rotation as a CSS variable
        logo.style.setProperty('--current-rotation', adjustedRotation);

        // Add the loaded class to trigger the animations
        document.body.classList.add('loaded');
    }, 4000); 
});




function updateHeartRate() {
    const heartRateElement = document.querySelector(".stats-frame:nth-child(1) p");
    let newHeartRate = Math.floor(Math.random() * (99 - 80 + 1)) + 80;
    heartRateElement.textContent = newHeartRate + " BPM";
}

function updateTemperature() {
    const temperatureElement = document.querySelector(".stats-frame:nth-child(3) p");
    let currentTemp = parseFloat(temperatureElement.textContent); // Get the current temperature

    // Calculate a small random change between -0.5 and +0.5
    let tempChange = (Math.random() * 1) - 0.5;
    let newTemperature = Math.min(Math.max(currentTemp + tempChange, 25.0), 39.5); // Keep within range

    temperatureElement.textContent = newTemperature.toFixed(1) + "°";
}
function face_changer(status) {
    var photo = document.getElementById("robot-photo");
    if (status=="Normal"){
        photo.src=`pictures/RobotFlip.png`; 
    } else {
        photo.src = `pictures/${status}Robot.png`; 

    }
}
updateHeartRate();
updateTemperature();

setInterval(updateHeartRate, 30000); // 30 seconds for heart rate
setInterval(updateTemperature, 1000); // 5 seconds for temperature

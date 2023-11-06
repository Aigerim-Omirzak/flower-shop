// Wait for the HTML document to fully load before executing the JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements using their IDs
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Add a click event listener to the "Add Task" button, and also listen for Enter key presses in the input field
    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Function to add a new task to the list
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const taskItem = document.createElement("ul");
            taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete btn btn-dark">Complete</button>
            <button class="delete btn btn-dark">Delete</button>
        `;

            taskList.appendChild(taskItem);
            taskInput.value = "";

            const deleteButton = taskItem.querySelector(".delete");
            const completeButton = taskItem.querySelector(".complete");

            deleteButton.addEventListener("click", () => taskItem.remove());
            completeButton.addEventListener("click", () => taskItem.classList.toggle("completed"));
        }
    }


    // Get references to HTML elements for a timer
    const display = document.getElementById("display");
    const minutesInput = document.getElementById("minutes");
    const startButton = document.getElementById("start");
    const resetButton = document.getElementById("reset");
    let timerInterval;
    let endTime;

    startButton.addEventListener("click", startTimer);
    resetButton.addEventListener("click", resetTimer);

    // Function to start the timer
    function startTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
        }

        const minutes = parseInt(minutesInput.value);
        if (!minutes || minutes <= 0) return;

        const now = Date.now();
        endTime = now + minutes * 60 * 1000;

        timerInterval = setInterval(updateTime, 1000);
        updateTime();



    }

    // Function to update the timer display
    function updateTime() {
        const now = Date.now();
        const remainingTime = endTime - now;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            display.textContent = "00:00";
            document.getElementById("alarm-sound").play();
            return;
        }

        const minutes = Math.floor(remainingTime / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);

        const displayMinutes = String(minutes).padStart(2, "0");
        const displaySeconds = String(seconds).padStart(2, "0");

        display.textContent = `${displayMinutes}:${displaySeconds}`;

        const timerLine = document.getElementById("timer-line");
        timerLine.style.transition = `width ${remainingTime / 1000}s linear`;
        timerLine.style.width = "0";
    }


    // Function to reset the timer
    function resetTimer() {
        clearInterval(timerInterval);
        display.textContent = "00:00";
        minutesInput.value = "";
        endTime = null;

    }

    // Get the feedback button and display elements
    const feedbackButton = document.getElementById('feedbackButton');
    const feedbackDisplay = document.getElementById('feedbackDisplay');

    // Add a click event listener to the button
    feedbackButton.addEventListener('click', () => {
        // Prompt the user for feedback
        const userFeedback = window.prompt('Please provide your feedback:');

        if (userFeedback) {
            // Display the feedback on the page
            feedbackDisplay.innerHTML = 'Feedback: ' + userFeedback;
        } else {
            // Display a message if the user didn't enter feedback
            feedbackDisplay.innerHTML = 'No feedback provided.';
        }
    });

    // JavaScript to change the image on hover
    const imageContainer = document.getElementById('imageContainer');
    const image = document.getElementById('image');

    // Change the image source when hovering over it
    imageContainer.addEventListener('mouseover', () => {
        image.src = "https://i.pinimg.com/736x/cb/97/10/cb9710dff6aa9d580e8ea4c72c07428c.jpg";
    });

    // Restore the original image on mouseout
    imageContainer.addEventListener('mouseout', () => {
        image.src = "https://flowerdose.com.au/cdn/shop/files/1_ColourTemptations_Halfdose-1573.jpg?v=1694066981&width=550";
    });
});

$(document).ready(function () {
    var totalFlowers = 4;
    var matchedFlowers = 0;

    $(".draggable").draggable({
        containment: ".container",
        cursor: "grabbing",
        revert: true
    });

    $(".dropzone").droppable({
        accept: ".draggable",
        drop: function (event, ui) {
            var flowerName = $(this).data("flower");
            var draggedFlower = ui.draggable.data("flower");

            if (flowerName === draggedFlower) {
                ui.draggable.draggable("disable");
                $(this).droppable("disable");
                ui.draggable.css("background-color", "#81c784");
                matchedFlowers++;

                if (matchedFlowers === totalFlowers) {
                    $("#result").text("You Win!");
                    document.getElementById("win-sound").play();
                }
            }
        }
    });

    const acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});





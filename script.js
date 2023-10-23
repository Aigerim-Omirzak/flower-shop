document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

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


    const display = document.getElementById("display");
    const minutesInput = document.getElementById("minutes");
    const startButton = document.getElementById("start");
    const resetButton = document.getElementById("reset");
    let timerInterval;
    let endTime;

    startButton.addEventListener("click", startTimer);
    resetButton.addEventListener("click", resetTimer);

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

    function updateTime() {
        const now = Date.now();
        const remainingTime = endTime - now;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            display.textContent = "00:00";
            return;
        }

        const minutes = Math.floor(remainingTime / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);

        const displayMinutes = String(minutes).padStart(2, "0");
        const displaySeconds = String(seconds).padStart(2, "0");

        display.textContent = `${displayMinutes}:${displaySeconds}`;
    }

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
        image.src = "https://www.800flower.ae/cdn/shop/products/summer-floral-original.jpg?v=1695355385";
    });
});




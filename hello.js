function validateForm() {
    let name = document.forms["myForm"]["fname"].value;
    let email = document.forms["myForm"]["email"].value;
    let address = document.forms["myForm"]["address"].value;

    // Check if the Name field is empty
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    // Check if the Email field is empty and validate the email format
    if (email === "") {
        alert("Email must be filled out");
        return false;
    } else if (!validateEmail(email)) {
        alert("Invalid email address");
        return false;
    }

    // Check if the Address field is empty
    if (address === "") {
        alert("Address must be filled out");
        return false;
    }

    // Show the modal
    document.getElementById('modalsuccess').style.display = 'block';

    // Prevent the form from actually submitting
    return false;
}

// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

// Function to close the modal
function closeModal() {
    document.getElementById('modalsuccess').style.display = 'none';
}
// Declare speedResultElement outside the function to make it accessible globally
const speedResultElement = document.getElementById("speedResult");

function detectSpeed() {
    try {
        // Get the input element
        const speedInput = document.getElementById("speed");

        // Call the speedDetector function with the input value
        speedDetector(speedInput.value);
    } catch (error) {
        console.error("An error occurred.");
        console.error(error);
    }
}

function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    try {
        // Parse the input speed to an integer
        const carSpeed = parseInt(speed);

        // Check if input is a valid number
        if (!isNaN(carSpeed)) {
            // Calculate demerit points
            const demeritPoints = Math.floor((carSpeed - speedLimit) / kmPerDemeritPoint);

            // Check if demerit points exceed the limit
            if (demeritPoints > 12) {
                speedResultElement.innerHTML = "License suspended";
            } else if (demeritPoints > 0) {
                // Fix the syntax error here by using backticks for template literals
                speedResultElement.innerHTML = `Points: ${demeritPoints}`;
            } else {
                speedResultElement.innerHTML = "Ok";
            }
        } else {
            speedResultElement.innerHTML = "Invalid input! Please enter a numeric value for speed.";
        }
    } catch (error) {
        console.error("An error occurred.");
        console.error(error);
    }
}

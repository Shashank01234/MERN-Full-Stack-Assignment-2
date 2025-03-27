const readline = require('readline');

function calculateOperations(num1, num2) {
    // Perform multiplication and division
    const multiplyResult = num1 * num2;
    const divideResult = num1 / num2;

    return {
        multiply: multiplyResult,
        divide: divideResult.toFixed(2) // Limiting to 2 decimal places
    };
}

function promptUserForCalculation() {
    // Create readline interface
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Prompt for first number
    rl.question("Enter the 1st Number: ", (firstInput) => {
        // Prompt for second number
        rl.question("Enter the 2nd Number: ", (secondInput) => {
            // Convert inputs to numbers
            const num1 = parseFloat(firstInput);
            const num2 = parseFloat(secondInput);

            // Validate inputs
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Invalid input! Please enter valid numbers.");
                rl.close();
                return;
            }

            // Check for division by zero
            if (num2 === 0) {
                console.log("Error: Cannot divide by zero!");
                rl.close();
                return;
            }

            // Perform calculations
            const results = calculateOperations(num1, num2);

            // Display results
            console.log("\nCalculation Results:");
            console.log(`Multiplication (${num1} * ${num2}): ${results.multiply}`);
            console.log(`Division (${num1} / ${num2}): ${results.divide}`);

            // Close the readline interface
            rl.close();
        });
    });
}

// Call the function to start user interaction
promptUserForCalculation();
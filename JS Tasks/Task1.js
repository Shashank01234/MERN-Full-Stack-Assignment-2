const readline = require('readline');

function reverseNumber() {
    // Create readline interface
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Prompt user for input
    rl.question("Enter a number to reverse: ", (input) => {
        // Check if input is a valid number
        if (isNaN(input)) {
            console.log("Invalid input! Please enter a number.");
            rl.close();
            return;
        }

        // Convert input to number and reverse
        let reversedNumber = parseInt(input.toString().split('').reverse().join(''));
        
        // Display the result
        console.log(`Original Number: ${input}`);
        console.log(`Reversed Number: ${reversedNumber}`);
        
        // Close the readline interface
        rl.close();
    });
}

// Call the function to start user interaction
reverseNumber();23
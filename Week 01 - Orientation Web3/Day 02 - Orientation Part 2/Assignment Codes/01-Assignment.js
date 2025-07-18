// What if I ask you the following question-Give me an inout string that outputs a SHA-256 hash that starts with 00000. How we will do?
// Ans:- We will have to brute force until we find a value that starts with 00000

// Import the necessary modules
const { log } = require("console"); // For console logging
const crypto = require("crypto");  // For cryptographic functions like SHA-256

// Function to find an input string whose SHA-256 hash starts with a specific prefix
function findHashWithPrefix(pre) {
	let input = 0; // Initialize the input value to 0

	while (true) {
		// Step 1: Convert the current input value to a string
		let inputStr = input.toString();
		
		// Step 2: Generate the SHA-256 hash of the input string
		let hash = crypto.createHash('sha256').update(inputStr).digest('hex');

		// Step 3: Check if the hash starts with the desired prefix
		if (hash.startsWith(pre)) {
			// Step 4: If the condition is met, return the input and its corresponding hash
			return { input: inputStr, hash: hash };
		}

		// Step 5: Log progress every 100,000 iterations for monitoring
		if (input % 100000 === 0) {
			console.log(`Currently at input: ${input}`);
		}

		// Step 6: Increment the input value to test the next possible value
		input++;
	}
}

// Call the function with a prefix of '00000' to find the desired hash
// Note: Start with smaller prefixes like '0' or '00' for faster testing
const res = findHashWithPrefix('00000');

// Log the final result once the input and hash are found
console.log(`Input: ${res.input}`);
console.log(`Hashed Result: ${res.hash}`);

const crypto = require("crypto"); // If you're using Node.js

function generateHash(input) {
  return crypto.createHash("sha256").update(input.toString()).digest("hex");
}

let number = 0;
let hash = "";

while (true) {
  hash = generateHash(number);

  if (hash.startsWith("0000")) {
    console.log(`✅ Found! Number: ${number}`);
    console.log(`🔐 Hash: ${hash}`);
    break;
  }

  number++;
}

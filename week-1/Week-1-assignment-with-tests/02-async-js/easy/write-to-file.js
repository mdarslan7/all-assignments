const fs = require('fs');

const content = "I am presently learning MERN Stack."

fs.writeFile('a.txt', content, 'utf-8', (err) => {
     console.log("File written successfully.");
});
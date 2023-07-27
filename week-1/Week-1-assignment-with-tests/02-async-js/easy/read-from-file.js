const fs = require('fs');

fs.readFile('a.txt', 'utf8', (err, content) => {
    console.log(content);
});
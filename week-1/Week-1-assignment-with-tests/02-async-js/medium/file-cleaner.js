const fs = require('fs');

fs.readFile('a.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    }

    const processedData = data.replace(/\s+/g, ' ');

    fs.writeFile('a.txt', processedData, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
        } 
        else {
            console.log('Extra spaces removed and file has been updated successfully.');
        }
    });

});



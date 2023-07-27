// let counter = 0;

// function printCounter() {
//     console.log(counter);
//     counter += 1;
// }

// setInterval(printCounter, 1000);

let counter = 0;

function printCounter() {
    console.log(counter);
    counter += 1;
    if (counter) {
        setTimeout(printCounter, 1000);
    }
}

printCounter();

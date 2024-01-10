function getRandomNumber() {
            // Returns a random number between 1 and 10
            return Math.floor(Math.random() * 10) + 1;
        }

function createRandomPromise() {
    // Create a promise with a 50% chance of resolving or rejecting
    return new Promise((resolve, reject) => {
        const randomNumber = getRandomNumber();
        if (Math.random() < 0.5) {
            resolve(randomNumber);
        } else {
            reject(new Error("Random error message")); // Replace "error" with an appropriate error message
        }
    });
}


function executePromises() {
    // Create an array of 5 promises
    const promises = Array.from({ length: 5 }, createRandomPromise);

    // Use Promise.all to wait for all promises to settle
    Promise.all(promises)
        .then(results => {
            // Log the array of results
            const outputDiv = document.getElementById('output');
            results.forEach((result, index) => {
                const pTag = document.createElement('p');
                pTag.textContent = ` ${index + 1}  ${result}`;
                outputDiv.appendChild(pTag);
            });
        })
        .catch((error, index) => {
            // Log the error if any promise rejects
            const outputDiv = document.getElementById('output');
            const pTag = document.createElement('p');
            pTag.textContent = promises ${index + 1} rejected with error: ${error.message};
            outputDiv.appendChild(pTag);
        });
}


        // Execute the promises when the script is loaded
        executePromises();


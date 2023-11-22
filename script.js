//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // Function to create a promise with 50% chance of resolving or rejecting
  function createRandomPromise(index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue < 0.5) {
          resolve({ index, value: Math.floor(Math.random() * 10) + 1 });
        } else {
          reject({ index, error: "Random error occurred" });
        }
      }, Math.random() * 1000); // Simulating asynchronous operation with setTimeout
    });
  }

  // Array to store promises
  const promises = [];

  // Create 5 promises
  for (let i = 0; i < 5; i++) {
    promises.push(createRandomPromise(i + 1));
  }

  // Use Promise.all to wait for all promises to settle
  Promise.allSettled(promises)
    .then(results => {
      // Log the results or errors
      results.forEach(result => {
        const outputDiv = document.getElementById("output");
        const pTag = document.createElement("p");
        if (result.status === "fulfilled") {
          pTag.textContent = `Promise ${result.value.index} resolved with value ${result.value.value}`;
        } else {
          pTag.textContent = `Promise ${result.reason.index} rejected with error: ${result.reason.error}`;
        }
        outputDiv.appendChild(pTag);
      });
    });
});


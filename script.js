//your JS code here. If required.
document.getElementById('ageForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const age = document.getElementById('age').value;
  const name = document.getElementById('name').value;

  // Validate if both fields are filled
  if (!age || !name) {
    alert("Please enter valid details.");
    return;
  }

  // Create a promise based on age validation
  const ageValidationPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // Simulate 4-second delay
  });

  // Handle promise resolution or rejection
  ageValidationPromise
    .then(message => alert(message))
    .catch(message => alert(message));
});

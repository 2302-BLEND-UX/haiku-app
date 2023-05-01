// Get form elements and haiku display element
const haikuForm = document.getElementById('haiku-form');
const line1Input = document.getElementById('line1-input');
const line2Input = document.getElementById('line2-input');
const line3Input = document.getElementById('line3-input');
const submitButton = document.getElementById('submit-button');
const haikuDisplay = document.getElementById('haiku-display');

// Hide haiku display element initially
haikuDisplay.style.display = 'none';

// Handle form submission
submitButton.addEventListener('click', function () {
    // Get user input from form
    const line1 = line1Input.value;
    const line2 = line2Input.value;
    const line3 = line3Input.value;

    // Construct haiku and display it
    const haiku = `
    <p>${line1}</p>
    <p>${line2}</p>
    <p>${line3}</p>
    `;
    haikuDisplay.innerHTML = haiku;
    haikuDisplay.classList.add('haiku');
    haikuDisplay.style.display = 'block';

    // Hide form
    haikuForm.style.display = 'none';
});

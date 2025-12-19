/// Call welcomeMessage function to prompt user and display welcome message
welcomeMessage();

function welcomeMessage() {
    /// Prompt user for their name
    const userInput = prompt('Please enter your name:');

    /// Get the welcome-speech DOM element
    const welcomDOM = document.getElementById('welcome-speech');

    /// Check if userInput is null or empty
    if (userInput === null || userInput.trim() === '') {
        /// Render default welcome message
        welcomDOM.innerHTML = 'Welcome, This is Our World!';
    } else {
        /// Render personalized welcome message
        welcomDOM.innerHTML = 'Welcome, ' + userInput + '!';
    }
}

/// Placeholder for form validation function
function validateForm() { }

<script>
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    link.addEventListener("click", function() {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
</script>

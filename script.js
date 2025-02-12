// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggleBtn');
  const demoText = document.getElementById('demoText');

  // Toggle the text color between black and red when the button is clicked
  toggleBtn.addEventListener('click', function() {
    if (demoText.style.color === 'red') {
      demoText.style.color = 'black';
    } else {
      demoText.style.color = 'red';
    }
  });
});

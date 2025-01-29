
const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
  const randomX = Math.random() * 100; 
  const randomDelay = Math.random() * 4; 
  const randomSize = (Math.random() * 20) + 20; 

  bubble.style.left = `${randomX}%`; 
  bubble.style.width = `${randomSize}px`;
  bubble.style.height = `${randomSize}px`;

  bubble.style.animationDelay = `-${randomDelay}s`; 
});

const bubbleContainer = document.querySelector('.bubble-container');
for (let i = 0; i < 20; i++) { 
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubbleContainer.appendChild(bubble);
}

const projects = document.querySelectorAll('.project'); // Select all project bubbles
const projectDetails = document.querySelector('.project-details'); // Project details container

projects.forEach(project => {
  project.addEventListener('click', (event) => {
    // Get the position of the clicked project (bubble)
    const projectRect = project.getBoundingClientRect();
    const projectX = projectRect.left + window.scrollX;
    const projectY = projectRect.top + window.scrollY;

    // Calculate where to position the project details
    projectDetails.style.left = `${projectX}px`;
    projectDetails.style.top = `${projectY}px`;

    // Get the project data (name, description)
    const projectName = project.dataset.project;
    const projectDescription = project.querySelector('.bubble-content').innerHTML;

    // Update the project details content
    projectDetails.innerHTML = `
      <h3>${projectName}</h3>
      <p>${projectDescription}</p>
      <button class="exit-btn">Exit</button>
    `;

    // Show the project details
    projectDetails.style.display = 'block';

    // Hide the clicked bubble (make it disappear)
    project.style.opacity = '0'; // Fade out the bubble
    project.style.transform = 'scale(0)'; // Shrink the bubble

    // Event listener for the exit button
    const newExitButton = projectDetails.querySelector('.exit-btn');
    newExitButton.addEventListener('click', () => {
      projectDetails.style.display = 'none'; // Hide the project details

      // Reset the bubble (make it visible and return to original size)
      project.style.opacity = '1';
      project.style.transform = 'scale(1)'; // Reset size to normal
    });

  }); // End of the 'click' event listener for each project
}); // End of the forEach loop



  document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init('mWOL8nRP282GElUjP'); // Replace with your public key
  
    // Add event listener for form submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();  // Prevent form default behavior (page reload)
  
      // Send the form using EmailJS
      emailjs.sendForm('service_z3zw13q', 'template_xd5tahs', this)
        .then(function(response) {
          alert('Message sent successfully!');
        }, function(error) {
          alert('Error sending message: ' + error);
        });
    });
  });
  
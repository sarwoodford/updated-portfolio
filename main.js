
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

const bubbleContainer = document.querySelector('.project-container');
for (let i = 0; i < 20; i++) { 
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubbleContainer.appendChild(bubble);
}

const projects = document.querySelectorAll('.project');
const projectDetails = document.querySelector('.project-details');
let currentlyActiveProject = null; // Track the currently active (viewed) project

projects.forEach(project => {
  project.addEventListener('click', () => {
    // If there's already an active project, reset it before proceeding
    if (currentlyActiveProject && currentlyActiveProject !== project) {
      currentlyActiveProject.classList.remove('popped'); // Remove pop effect from the previous bubble
      projectDetails.classList.remove('visible'); // Hide the previous project details
    }

    // Add the 'popped' class to trigger the pop animation for the current project
    project.classList.add('popped');

    // Wait for the pop animation to finish before displaying project details
    setTimeout(() => {
      const projectName = project.dataset.project;
      const projectDescription = project.querySelector('.bubble-content').innerHTML;

      // Update the project details section
      projectDetails.innerHTML = `
        <h3>${projectName}</h3>
        <p>${projectDescription}</p>
        <button class="exit-btn">Exit</button> <!-- Exit button -->
      `;
      projectDetails.classList.add('visible');  // Show the project details

      // Update the currently active project
      currentlyActiveProject = project;

      // Get the exit button and add event listener to it
      const exitButton = document.querySelector('.exit-btn');
      exitButton.addEventListener('click', () => {
        project.classList.remove('popped'); // Remove the pop effect to make the bubble visible again
        projectDetails.classList.remove('visible'); // Hide the project details
        currentlyActiveProject = null; // Reset the active project
      });
    }, 500);  // Wait for the pop animation to complete (500ms)
  });
});


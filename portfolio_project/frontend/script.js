console.log("Portfolio Loaded Successfully");

const text = "Frontend Developer & AIML Student";
let index = 0;

function typeEffect() {
  const typingElement = document.getElementById("typing");
  typingElement.innerHTML = text.slice(0, index);
  index++;

  if (index <= text.length) {
    setTimeout(typeEffect, 100);
  }
}

typeEffect();

const projects = [
  {
    title: "Number Guessing Game",
    description:
      "Developed a Python-based game where the user guesses a randomly generated number. Implemented loops and conditional statements to provide hints and track attempts.",
    technology: "Python"
  }
];

const projectContainer = document.getElementById("projectContainer");

projects.forEach(function(project) {
  projectContainer.innerHTML += `
    <div class="card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <b>Technology: ${project.technology}</b>
    </div>
  `;
});

window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.18)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
  }
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you! Your message has been submitted.");
  contactForm.reset();
});
    // ================== THEME SWITCH ==================
    const themeBtn = document.querySelector(".switch_theme");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark");
    }

    themeBtn.addEventListener("click", () => {
      body.classList.toggle("dark");
      localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
    });

    // ================== TYPING EFFECT ==================
    const textElement = document.querySelector(".text");
    const textArray = ["Frontend Developer", "Web Designer", "React Developer"];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let typingStarted = false;

    function typeEffect() {
      currentText = textArray[textIndex];

      if (!isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(typeEffect, 1500);
          return;
        }
      } else {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % textArray.length;
        }
      }
      setTimeout(typeEffect, isDeleting ? 80 : 120);
    }

    // ================== INTERSECTION OBSERVER ==================
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            homeSection.classList.add("visible");
            if (!typingStarted) {
              typingStarted = true;
              typeEffect();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(homeSection);
const eduCards = document.querySelectorAll('.education-content');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  eduCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 150); // staggered effect
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

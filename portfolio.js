// ================== SECTION ANIMATION ==================
document.addEventListener('DOMContentLoaded', function() {
  const animatedSections = document.querySelectorAll('.animate-section');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  animatedSections.forEach(section => {
    // Add .animate-child to direct children for staggered effect
    const children = Array.from(section.children);
    children.forEach((child, i) => {
      child.classList.add('animate-child');
      child.style.transitionDelay = `${i * 120}ms`;
    });
    sectionObserver.observe(section);
  });
});
// ================== ABOUT MODAL POPUP ==================
document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.querySelector('.about-content .btn');
  const aboutModal = document.getElementById('about-modal');
  const aboutModalClose = document.querySelector('.about-modal-close');

  if (readMoreBtn && aboutModal && aboutModalClose) {
    readMoreBtn.addEventListener('click', function(e) {
      e.preventDefault();
      aboutModal.classList.add('active');
    });
    aboutModalClose.addEventListener('click', function() {
      aboutModal.classList.remove('active');
    });
    window.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') aboutModal.classList.remove('active');
    });
    aboutModal.addEventListener('click', function(e) {
      if (e.target === aboutModal) aboutModal.classList.remove('active');
    });
  }
});
// ================== SKILLS BAR ANIMATION ==================
const skillsSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.skills-content .bar span');

function animateSkillBars() {
  skillBars.forEach((bar) => {
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)';
      bar.style.width = getComputedStyle(bar).getPropertyValue('--skill-percent');
    }, 100);
  });
}

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateSkillBars();
    }
  });
}, { threshold: 0.4 });

if (skillsSection) {
  skillsObserver.observe(skillsSection);
}
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

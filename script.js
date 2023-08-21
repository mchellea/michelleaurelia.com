document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in");

  function checkFadeIn() {
      fadeInElements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementTop < windowHeight * 0.8) {
              element.classList.add("fade-in-active");
          }
      });
  }

  // Initial check when the page loads
  checkFadeIn();

  // Check when scrolling
  window.addEventListener("scroll", checkFadeIn);
});


document.addEventListener("DOMContentLoaded", function() {
  var overlay = document.querySelector(".overlay");
  setTimeout(function() {
      overlay.style.opacity = 0;
  }, 1000);
});

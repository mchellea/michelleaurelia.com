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


function checkPassword() {
  var enteredPassword = document.getElementById('password').value;
  var correctPassword = 'xiaolongbao'; 

  if (enteredPassword === correctPassword) {
      // Password is correct, display the content
      document.getElementById('password-form').style.display = 'none';
      document.getElementById('content').style.display = 'block';
  } else {
      // Incorrect password, you may display an error message here
      alert('Sorry! Wrong password. Please try again.');
  }
}

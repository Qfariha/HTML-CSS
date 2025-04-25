document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu
  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

  toggleButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
  });

  // Video Modal
  const modal = document.getElementById('videoModal');
  const videoButton = document.querySelector('.preview__video-button');
  const closeButton = document.querySelector('.modal__close-button');
  const videoPlayer = document.getElementById('videoPlayer');

  // Open modal when clicked
  videoButton.addEventListener('click', function () {
    // Show modal
    modal.style.display = 'block';

    // Embed URL format=> https://www.youtube.com/embed/VIDEO_ID
    videoPlayer.src = 'https://www.youtube.com/embed/1ONhXmQuWP8';

    // Close modal on close button click
    closeButton.addEventListener('click', function () {
      modal.style.display = 'none';
      videoPlayer.src = '';
    });

    // Close modal on outter click
    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        videoPlayer.src = '';
      }
    });
  });
});
    
// Nav scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
});
  
import './navbar.scss';

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
document.addEventListener('WebAppInvoker_ContentLoading', () => {
  document.getElementById('sandwich').onclick = () => {
    var x = document.getElementById('navbar');
    if (x.className === 'topnav') {
      x.classList.add('responsive');
    } else {
      x.className = 'topnav';
    }
  };

  const navbar = document.getElementById('navbar');
  const slider = document.getElementById('slider');

  window.addEventListener('scroll', () => {
    // Get the position of the slider relative to the top of the page
    const sliderPosition = slider.offsetTop + slider.offsetHeight;

    // If the page has been scrolled past the slider, add the 'scrolled' class to the navbar
    if (window.scrollY > sliderPosition) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  window.addEventListener('hashchange', () => {
    // Get all the navbar links
    const links = document.querySelectorAll('.nav-link');

    // Remove the active class from all links
    links.forEach((link) => link.classList.remove('active'));

    // Get the current URL hash
    const currentHash = window.location.hash;

    // Find the link that corresponds to the current hash and add the active class
    if (currentHash) {
      const activeLink = document.querySelector(`a[href="${currentHash}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
});

const template = `
    <div class="topnav" id="navbar">
        <a class="nav-link active" href="#slider">Home</a>
        <a class="nav-link" href="#menu-section">Menu</a>
        <a class="nav-link" href="#contact">Contact</a>
        <a class="nav-link" href="#reviews-section">Reviews</a>
        <a href="javascript:void(0);" class="icon" id="sandwich">
            <i class="fa fa-bars"></i>
        </a>
    </div>
`;

export default template;

import './navbar.scss';
import logo from '../../../assets/logo.png';

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
document.addEventListener('WebAppInvoker_ContentLoading', () => {
  document.getElementById('logo').onclick = () => {
    window.location.hash = '#slider';
    const slider = document.getElementById('slider');
    slider.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navbar = document.getElementById('navbar');
  const slider = document.getElementById('slider');
  const navLinks = document.querySelectorAll('#navbar .nav-link');
  const sections = [
    slider,
    document.getElementById('menu-section'),
    document.getElementById('contact-section'),
    document.getElementById('reviews-section'),
  ];

  // Navbar change active handler
  window.addEventListener('scroll', () => {
    // Get the position of the slider relative to the top of the page
    const sliderPosition = slider.offsetTop + slider.offsetHeight;
    const viewportCenter = window.scrollY + window.innerHeight / 2;

    // If the page has been scrolled past the slider, add the 'scrolled' class to the navbar
    if (viewportCenter > sliderPosition) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Get the center of the viewport

    // Check which section is in the viewport
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      // Check if the center of the screen is within the section's bounds
      if (viewportCenter >= sectionTop && viewportCenter < sectionBottom) {
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
      }
    });
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
        <img id="logo" src="${logo}" draggable="false" alt="cafeteria background image 1">
        <div>
          <a class="nav-link active" href="#slider">Home</a>
          <a class="nav-link" href="#menu-section">Menu</a>
          <a class="nav-link" href="#contact">Contact</a>
          <a class="nav-link" href="#reviews-section">Reviews</a>
        </div>
    </div>
`;

export default template;

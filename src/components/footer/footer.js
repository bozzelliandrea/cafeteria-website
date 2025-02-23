import './footer.scss';

const footerElement = document.querySelector('#main_footer');

footerElement.innerHTML = `
  <p class="footer-content">Copyright ©${new Date().getFullYear()} - Bozzelli Andrea ☕️</p>
`;

footerElement.classList.add('footer');

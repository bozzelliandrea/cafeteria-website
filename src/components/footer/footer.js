import './footer.scss';

function loadComponent() {
  const footerElement = document.getElementById('main_footer');

  footerElement.innerHTML = `
  <p class="footer-content">Copyright ©${new Date().getFullYear()} - Bozzelli Andrea ☕️</p>
`;

  footerElement.classList.add('footer');
}

document.addEventListener('DOMContentLoaded', loadComponent);

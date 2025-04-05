import './slider.scss';
import cafeteria1 from '../../../assets/cafeteria1.jpg';
import cafeteria2 from '../../../assets/cafeteria2.jpg';
import cafeteria3 from '../../../assets/cafeteria3.jpg';
import cafeteria4 from '../../../assets/cafeteria4.jpg';
import logo from '../../../assets/logo.png';

document.addEventListener('WebAppInvoker_ContentLoading', () => {
  document.getElementById('slider-view-menu-button').onclick = () => {
    window.location.hash = '#menu-section';
    document
      .getElementById('menu-section')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  document.getElementById('slider-book-table-button').onclick = () => {
    window.location.hash = '#contact';
    document
      .getElementById('contact-section')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
});

const template = `
    <div class="carousel" id="slider" role="region" aria-label="Cafeteria photo carousel">
        <div class="carousel-images" aria-live="polite">
            <img src="${cafeteria1}" draggable="false" alt="cafeteria background image 1" role="img">
            <img src="${cafeteria2}" draggable="false" alt="cafeteria background image 2" role="img">
            <img src="${cafeteria3}" draggable="false" alt="cafeteria background image 3" role="img">
            <img src="${cafeteria4}" draggable="false" alt="cafeteria background image 4" role="img">
        </div>
        <div class="overlay">
          <div class="overlay-content">
            <img id="logo-mobile" src="${logo}" draggable="false" alt="cafeteria logo" role="img">

            <h1>kauai coffee</h1>
            <p>One of the Best coffee taste and Experience in Town</p>
            <div class="button-container">
                <button id="slider-view-menu-button" class="btn">View Menu</button>
                <button id="slider-book-table-button" class="btn">Book a Table</button>
            </div>
          </div>
        </div>
    </div>
  `;

export default template;

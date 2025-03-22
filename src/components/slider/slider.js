import './slider.scss';
import cafeteria1 from '../../../assets/cafeteria1.jpg';
import cafeteria2 from '../../../assets/cafeteria2.jpg';
import cafeteria3 from '../../../assets/cafeteria3.jpg';
import cafeteria4 from '../../../assets/cafeteria4.jpg';

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
    <div class="carousel" id="slider">
        <div class="carousel-images">
            <img src="${cafeteria1}" draggable="false" alt="cafeteria background image 1">
            <img src="${cafeteria2}" draggable="false" alt="cafeteria background image 2">
            <img src="${cafeteria3}" draggable="false" alt="cafeteria background image 3">
            <img src="${cafeteria4}" draggable="false" alt="cafeteria background image 4">
        </div>
        <div class="overlay">
          <div class="overlay-content">
            <h1>kauai coffee</h1>
            <p>One of the Best coffee taste and Experience in Town</p>
            <div class="button-container">
                <a id="slider-view-menu-button" class="btn">View Menu</a>
                <a id="slider-book-table-button" class="btn">Book a Table</a>
            </div>
          </div>
        </div>
    </div>
  `;

export default template;

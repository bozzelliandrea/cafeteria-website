import './slider.scss';
import cafeteria1 from '../../../assets/cafeteria1.jpg';
import cafeteria2 from '../../../assets/cafeteria2.jpg';
import cafeteria3 from '../../../assets/cafeteria3.jpg';
import cafeteria4 from '../../../assets/cafeteria4.jpg';

const template = `
    <div class="carousel">
        <div class="carousel-images">
            <img src="${cafeteria1}" draggable="false" alt="cafeteria background image 1">
            <img src="${cafeteria2}" draggable="false" alt="cafeteria background image 2">
            <img src="${cafeteria3}" draggable="false" alt="cafeteria background image 3">
            <img src="${cafeteria4}" draggable="false" alt="cafeteria background image 4">
        </div>
        <div class="overlay">
          <div class="overlay-content">
            <h1>MAIN TITLE TO SET</h1>
            <h4>Commercial lorem ipsum beta alpa</h4>
            <div class="button-container">
                <a class="btn">Order Now</a>
                <a class="btn">View Menu</a>
            </div>
          </div>
        </div>
    </div>
  `;

export default template;

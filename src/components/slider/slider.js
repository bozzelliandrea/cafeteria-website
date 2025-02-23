import './slider.scss';
import cafeteria1 from '../../../assets/cafeteria1.jpg';
import cafeteria2 from '../../../assets/cafeteria2.jpg';
import cafeteria3 from '../../../assets/cafeteria3.jpg';
import cafeteria4 from '../../../assets/cafeteria4.jpg';

let index = 0;

function showSlide() {
  const slider = document.getElementById('top_slider');

  slider.innerHTML = `
  <div class="carousel">
        <div class="carousel-images">
            <img src="${cafeteria1}" alt="cafeteria background image 1">
            <img src="${cafeteria2}" alt="cafeteria background image 2">
            <img src="${cafeteria3}" alt="cafeteria background image 3">
            <img src="${cafeteria4}" alt="cafeteria background image 4">
        </div>
    </div>
  `;

  const slides = document.querySelector('.slides');
  slides.style.transform = `translateX(-${index * 100}%)`;
}

document.addEventListener('DOMContentLoaded', showSlide);

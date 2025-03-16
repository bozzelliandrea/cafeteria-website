import './booking.scss';
import template from './booking.html?raw';
import coffeecin from '../../../assets/coffee_cin.jpg';

document.addEventListener('WebAppInvoker_ContentLoading', () => {
  document.getElementById('coffeecin').src = coffeecin;
});

export default template;

import './booking.scss';
import template from './booking.html?raw';
import coffeecin from '../../../assets/coffee_cin.jpg';

document.addEventListener('WebAppInvoker_ContentLoading', () => {
  document.getElementById('coffeecin').src = coffeecin;
  document.dispatchEvent(new Event('SectionRender_Booking_Complete'));
});

export default template;

import './booking.scss';
import template from './booking.html?raw';

document.addEventListener('WebAppInvoker_ContentLoading', () => {
  console.log('FROM BOOKING');
});

export default template;

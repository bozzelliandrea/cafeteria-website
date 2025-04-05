import './contact.scss';
import template from './contact.html?raw';

document.addEventListener('WebAppInvoker_ContentLoading', () => {
  document.dispatchEvent(new Event('SectionRender_Contact_Complete'));
});

export default template;

import './index.scss';

import sliderSection from './components/slider/slider.js';
import footerSection from './components/footer/footer.js';
import contactSection from './sections/contact.js';
import menuSection from './sections/menu.js';
import reviewsSection from './sections/reviews.js';

document.getElementById('root').innerHTML = `
  <div class="content">
    ${sliderSection}
    ${menuSection}
    ${contactSection}
    ${reviewsSection}
    ${footerSection}
  </div>
`;

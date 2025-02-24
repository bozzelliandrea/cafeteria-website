// barrel index
import './index.scss';

// shared components
import './components/footer/footer.js';
import './components/slider/slider.js';

// page sections
import contactSection from './sections/contact.js';
import menuSection from './sections/menu.js';

document.getElementById('root').innerHTML = `
<div class="content">
	<div id="top_slider"></div>
  ${menuSection}
  ${contactSection}
  <footer id="main_footer"></footer>

</div>
`;

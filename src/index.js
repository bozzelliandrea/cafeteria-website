import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  // render slider first
  import('./components/slider/slider.js')
    .then(async (sliderModule) => {
      const navbar = await import('./components/navbar/navbar.js');
      document.getElementById('root').innerHTML = `
      <div class="content">
        ${navbar.default}
        ${sliderModule.default}
      </div>
    `;

      // load the rest of the sections
      return Promise.all([
        import('./sections/menu/menu.js'),
        import('./sections/contact/contact.js'),
        import('./sections/booking/booking.js'),
        import('./sections/reviews/reviews.js'),
        import('./components/footer/footer.js'),
      ]);
    })
    .then((sections) => {
      document.querySelector('.content').innerHTML += sections
        .map((s) => s.default)
        .join('');
      document.dispatchEvent(new Event('WebAppInvoker_ContentLoading'));
    })
    .catch((error) => {
      console.error('Error loading sections:', error);
    });
});

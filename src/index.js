import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  // render slider first
  import('./components/slider/slider.js')
    .then((sliderModule) => {
      const sliderSection = sliderModule.default;

      document.getElementById('root').innerHTML = `
      <div class="content">
        ${sliderSection}
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
    })
    .catch((error) => {
      console.error('Error loading sections:', error);
    });
});

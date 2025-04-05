function waitForEvents(eventNames, callback, target = window) {
  const received = new Set();

  function handler(event) {
    received.add(event.type);

    if (eventNames.every((e) => received.has(e))) {
      // All events received, run callback
      callback();

      // Clean up
      eventNames.forEach((e) => target.removeEventListener(e, handler));
    }
  }

  eventNames.forEach((e) => target.addEventListener(e, handler));
}

const SECTION_IDS = [
  'navbar',
  'slider',
  'menu-section',
  'contact-section',
  'booking-section',
  'reviews-section',
];

let currentSectionIndex = 0;
let isInsideSection = false;
let innerFocusIndex = 0;

// Get all focusable elements within a container
function getFocusableElements(container) {
  return [
    ...container.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
    ),
  ].filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);
}

function focusSection(index) {
  isInsideSection = false;
  innerFocusIndex = 0;

  const previous = document.getElementById(SECTION_IDS[currentSectionIndex]);
  if (previous) previous.classList.remove('section-focus');

  currentSectionIndex = index;

  const section = document.getElementById(SECTION_IDS[currentSectionIndex]);
  if (section) {
    section.classList.add('section-focus');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });
  }
}

// Website Arrow Navigation Manager
waitForEvents(
  [
    'SectionRender_Reviews_Complete',
    'SectionRender_Menu_Complete',
    'SectionRender_Contact_Complete',
    'SectionRender_Booking_Complete',
  ],
  () => {
    document.addEventListener('keydown', (e) => {
      const section = document.getElementById(SECTION_IDS[currentSectionIndex]);
      if (!section) return;

      const focusableElements = getFocusableElements(section);

      if (
        e.key === 'ArrowDown' &&
        !isInsideSection &&
        currentSectionIndex < SECTION_IDS.length - 1
      ) {
        e.preventDefault();
        focusSection(currentSectionIndex + 1);
      } else if (
        e.key === 'ArrowUp' &&
        !isInsideSection &&
        currentSectionIndex > 0
      ) {
        e.preventDefault();
        focusSection(currentSectionIndex - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();

        if (!isInsideSection && focusableElements.length > 0) {
          isInsideSection = true;
          innerFocusIndex = 0;
          focusableElements[innerFocusIndex].focus();
        } else if (
          isInsideSection &&
          innerFocusIndex < focusableElements.length - 1
        ) {
          innerFocusIndex++;
          focusableElements[innerFocusIndex].focus();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();

        if (isInsideSection && innerFocusIndex > 0) {
          innerFocusIndex--;
          focusableElements[innerFocusIndex].focus();
        } else if (isInsideSection && innerFocusIndex === 0) {
          isInsideSection = false;
          section.focus({ preventScroll: true });
        }
      } else if (e.key === 'Escape') {
        if (isInsideSection) {
          e.preventDefault();
          isInsideSection = false;
          innerFocusIndex = 0;
          section.focus({ preventScroll: true });
        }
      }
    });
  },
  document,
);

import './menu.scss';
import template from './menu.html?raw';
import dessert1 from '../../../assets/food/dessert-1.jpg.webp';
import dessert2 from '../../../assets/food/dessert-2.jpg.webp';
import dessert4 from '../../../assets/food/dessert-4.jpg.webp';
import dish3 from '../../../assets/food/dish-3.jpg.webp';
import dish4 from '../../../assets/food/dish-4.jpg.webp';
import dish5 from '../../../assets/food/dish-5.jpg.webp';
import dish6 from '../../../assets/food/dish-6.jpg.webp';
import dish7 from '../../../assets/food/dish-7.jpg.webp';
import dish8 from '../../../assets/food/dish-8.jpg.webp';
import drink5 from '../../../assets/food/drink-5.jpg.webp';
import drink6 from '../../../assets/food/drink-6.jpg.webp';
import drink7 from '../../../assets/food/drink-7.jpg.webp';
import drink8 from '../../../assets/food/drink-8.jpg.webp';

const sectionIds = [
  'starter-container',
  'main-menu-container',
  'dessert-container',
  'drinks-container',
];

function getCurrentSectionIndex() {
  return sectionIds.findIndex((id) => document.activeElement.id === id);
}

function getMenuItems(sectionId) {
  const section = document.getElementById(sectionId);
  return section
    ? Array.from(section.querySelectorAll('.menu-item_container'))
    : [];
}

function focusSectionByIndex(index) {
  const section = document.getElementById(sectionIds[index]);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    section.focus({ preventScroll: true });
  }
}

function focusMenuItem(sectionId, itemIndex) {
  const items = getMenuItems(sectionId);

  items.forEach((item) => item.removeAttribute('aria-current'));

  if (items[itemIndex]) {
    items[itemIndex].setAttribute('aria-current', 'true');
    items[itemIndex].focus();
  }
}

document.addEventListener('keydown', (e) => {
  const currentSectionIndex = getCurrentSectionIndex();

  // Inside section container
  if (
    currentSectionIndex >= 0 &&
    document.activeElement.id === sectionIds[currentSectionIndex]
  ) {
    const sectionId = sectionIds[currentSectionIndex];

    if (e.key === 'ArrowRight') {
      // Enter into first item in section
      e.preventDefault();
      focusMenuItem(sectionId, 0);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusSectionByIndex(
        Math.min(sectionIds.length - 1, currentSectionIndex + 1),
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusSectionByIndex(Math.max(0, currentSectionIndex - 1));
    }

    // Inside a menu item
  } else if (document.activeElement.classList.contains('menu-item_container')) {
    const currentSectionId = sectionIds.find((id) =>
      document.getElementById(id)?.contains(document.activeElement),
    );

    const items = getMenuItems(currentSectionId);
    const itemIndex = items.indexOf(document.activeElement);

    if (e.key === 'ArrowDown' && itemIndex < items.length - 1) {
      e.preventDefault();
      focusMenuItem(currentSectionId, itemIndex + 1);
    }

    if (e.key === 'ArrowUp' && itemIndex > 0) {
      e.preventDefault();
      focusMenuItem(currentSectionId, itemIndex - 1);
    }

    if (e.key === 'ArrowLeft') {
      // Exit to parent section
      e.preventDefault();
      const section = document.getElementById(currentSectionId);
      items.forEach((item) => item.removeAttribute('aria-current'));

      section?.focus();
    }
  }
});

function createMenuItem({ name, description, price, image }) {
  // Create the outer container
  const menuItemEntry = document.createElement('div');
  menuItemEntry.classList.add('menu-item_container');

  // Accessibility attributes
  menuItemEntry.setAttribute('lang', 'en');
  menuItemEntry.setAttribute('role', 'listitem');
  menuItemEntry.setAttribute('tabindex', '0');

  const safeNameId = `menu-item-${name.toLowerCase().replace(/\s+/g, '-')}`;
  menuItemEntry.setAttribute('aria-labelledby', `${safeNameId}-heading`);
  menuItemEntry.setAttribute(
    'aria-describedby',
    `${safeNameId}-description ${safeNameId}-price`,
  );

  // Create the image element
  const img = document.createElement('img');
  img.classList.add('menu-item_icon');
  img.src = image;

  // Accessible alt text (assume descriptive or allow override via param if needed)
  img.alt = `${name} dish`;
  img.setAttribute('role', 'img'); // Helps screen readers know it's meaningful

  const imgContainerDiv = document.createElement('div');
  imgContainerDiv.classList.add('menu-item_icon-container');
  imgContainerDiv.appendChild(img);

  // Create content container
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('menu-item_content');

  // Header (name and price)
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('menu-item_content-header');

  const itemTitle = document.createElement('p');
  itemTitle.className = 'menu-item_title';
  itemTitle.textContent = name;
  itemTitle.id = `${safeNameId}-heading`;

  const priceSpan = document.createElement('span');
  priceSpan.classList.add('price');
  priceSpan.textContent = `$${price}`;
  priceSpan.id = `${safeNameId}-price`;
  priceSpan.setAttribute('aria-label', `Price: $${price}`);

  headerDiv.appendChild(itemTitle);
  headerDiv.appendChild(priceSpan);

  // Description
  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('menu-item_content-description');

  const descriptionPara = document.createElement('p');
  descriptionPara.textContent = description;
  descriptionPara.id = `${safeNameId}-description`;
  descriptionPara.setAttribute('aria-label', `Description: ${description}`);

  descriptionDiv.appendChild(descriptionPara);

  // Assemble all parts
  contentContainer.appendChild(headerDiv);
  contentContainer.appendChild(descriptionDiv);
  menuItemEntry.appendChild(imgContainerDiv);
  menuItemEntry.appendChild(contentContainer);

  return menuItemEntry;
}

const STARTER_LIST = [
  {
    name: 'Bruschetta',
    description: 'Toasted bread with tomatoes and basil.',
    price: '6.50',
    image: dish3,
  },
  {
    name: 'Stuffed Mushrooms',
    description: 'Mushrooms filled with cheese and herbs.',
    price: '12.00',
    image: dish4,
  },
  {
    name: 'Caesar Salad',
    description: 'Crisp lettuce with Caesar dressing.',
    price: '8.40',
    image: dessert2,
  },
  {
    name: 'Garlic Bread',
    description: 'Buttery, garlicky toasted bread.',
    price: '7.00',
    image: dish6,
  },
];

const MAIN_LIST = [
  {
    name: 'Grilled Chicken Breast',
    description: 'Served with steamed vegetables.',
    price: '16.50',
    image: dish7,
  },
  {
    name: 'Beef Wellington',
    description: 'Tender beef wrapped in puff pastry.',
    price: '22.00',
    image: dish5,
  },
  {
    name: 'Spaghetti Carbonara',
    description: 'Pasta with creamy bacon sauce.',
    price: '12.40',
    image: dish8,
  },
  {
    name: 'Vegetable Stir Fry',
    description: 'A medley of stir-fried veggies.',
    price: '14.00',
    image: dessert4,
  },
];

const DESSERT_LIST = [
  {
    name: 'Chocolate Lava Cake',
    description: 'Warm cake with molten chocolate center.',
    price: '5.50',
    image: dessert1,
  },
  {
    name: 'Tiramisu',
    description: 'Coffee-flavored Italian dessert.',
    price: '6.00',
    image: dish4,
  },
  {
    name: 'Lemon Sorbet',
    description: 'Refreshing citrus frozen dessert.',
    price: '4.50',
    image: dish6,
  },
  {
    name: 'Vanilla Panna Cotta',
    description: 'Creamy custard with fruit topping.',
    price: '3.50',
    image: drink5,
  },
];

const DRINKS_LIST = [
  {
    name: 'Lemonade',
    description: 'Freshly squeezed lemon juice.',
    price: '4.50',
    image: drink6,
  },
  {
    name: 'Iced Coffee',
    description: 'Chilled coffee with ice cubes.',
    price: '5.50',
    image: drink7,
  },
  {
    name: 'Coca Cola',
    description: 'Classic carbonated soft drink.',
    price: '4.50',
    image: drink8,
  },
  {
    name: 'Sparkling Water',
    description: 'Refreshing fizzy mineral water.',
    price: '3.00',
    image: dish3,
  },
];

function buildMenuSectionContainer(containerId, configArray) {
  const container = document.getElementById(containerId);
  if (container) {
    configArray.forEach((config) =>
      container.appendChild(createMenuItem(config)),
    );
  } else {
    console.error(`${containerId} not found in DOM!`);
  }
}

document.addEventListener('WebAppInvoker_ContentLoading', () => {
  buildMenuSectionContainer('starter-container', STARTER_LIST);
  buildMenuSectionContainer('main-menu-container', MAIN_LIST);
  buildMenuSectionContainer('dessert-container', DESSERT_LIST);
  buildMenuSectionContainer('drinks-container', DRINKS_LIST);
});

export default template;

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

function createMenuItem({ name, description, price, image }) {
  // Create the outer div
  const pricingEntry = document.createElement('div');
  pricingEntry.classList.add('menu-item_container');
  // Create the image div
  const imgDiv = document.createElement('img');
  imgDiv.classList.add('menu-item_icon');
  imgDiv.src = image;

  const imgContainerDiv = document.createElement('div');
  imgContainerDiv.classList.add('menu-item_icon-container');
  imgContainerDiv.appendChild(imgDiv);

  // Create the desc div
  const contentHeaderDiv = document.createElement('div');
  contentHeaderDiv.classList.add('menu-item_content');

  // Create the inner content div
  const innerContentDiv = document.createElement('div');
  innerContentDiv.classList.add('menu-item_content-header');

  // Create the h3 and span elements for name
  const h3 = document.createElement('h3');
  h3.textContent = name;

  // Create the price span
  const priceSpan = document.createElement('span');
  priceSpan.classList.add('price');
  priceSpan.textContent = `$${price}`;

  // Append h3 and priceSpan to innerContentDiv
  innerContentDiv.appendChild(h3);
  innerContentDiv.appendChild(priceSpan);

  // Create the description div
  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('menu-item_content-description');
  const descriptionPara = document.createElement('p');
  descriptionPara.textContent = description;
  descriptionDiv.appendChild(descriptionPara);

  // Append innerContentDiv and descriptionDiv to descDiv
  contentHeaderDiv.appendChild(innerContentDiv);
  contentHeaderDiv.appendChild(descriptionDiv);

  // Append imgDiv and descDiv to pricingEntry
  pricingEntry.appendChild(imgContainerDiv);
  pricingEntry.appendChild(contentHeaderDiv);

  return pricingEntry;
}

const STARTER_LIST = [
  {
    name: 'Bruschetta',
    description: 'Toasted bread with tomatoes and basil.',
    price: '6.50',
    image: dish3, // You can randomly assign image imports like dish3, dessert1, etc.
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

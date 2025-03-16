import './menu.scss';
import template from './menu.html?raw';

function createMenuItem({ name, description, price }) {
  // Create the outer div
  const pricingEntry = document.createElement('div');
  pricingEntry.classList.add('menu-item_container');

  // Create the image div
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('menu-item_icon');
  imgDiv.style.backgroundImage = 'url(images/dish-1.jpg)'; // You can customize this URL

  const imgContainerDiv = document.createElement('div');
  imgContainerDiv.classList.add('menu-item_icon-container');
  imgContainerDiv.appendChild(imgDiv);

  // Create the desc div
  const contentHeaderDiv = document.createElement('div');
  contentHeaderDiv.classList.add('menu-item_content');

  // Create the inner content div (d-flex text align-items-center)
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

  // Create the description div (d-block)
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
    name: 'Starter Dish One',
    description: 'A description of this amazing dish.',
    price: '6.50',
  },
  {
    name: 'Starter Dish Two',
    description: 'A description of this amazing dish.',
    price: 12,
  },
  {
    name: 'Starter Dish Three',
    description: 'A description of this amazing dish.',
    price: '8.40',
  },
  {
    name: 'Starter Dish Four',
    description: 'A description of this amazing dish.',
    price: 7,
  },
];

function buildMenuSectionContainer(containerName, configArray) {
  const container = document.getElementById(containerName);
  if (container) {
    configArray.forEach((config) =>
      container.appendChild(createMenuItem(config)),
    );
  } else {
    console.error(`${containerName} not found in DOM!`);
  }
}

document.addEventListener('WebAppInvoker_ContentLoading', () => {
  buildMenuSectionContainer('starter-container', STARTER_LIST);
  buildMenuSectionContainer('main-menu-container', STARTER_LIST);
  buildMenuSectionContainer('dessert-container', STARTER_LIST);
  buildMenuSectionContainer('drinks-container', STARTER_LIST);
});

export default template;

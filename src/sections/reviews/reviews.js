import './reviews.scss';
import template from './reviews.html?raw';

const reviews = [
  {
    name: 'Sarah Johnson',
    review:
      'The cappuccino here is absolutely perfect! Smooth, rich, and the right amount of froth. Will definitely be coming back for more!',
    style: ['secondary'],
  },
  {
    name: 'Michael Davis',
    review:
      'Had the avocado toast with poached eggs and it was delicious! Fresh, flavorful, and just the right amount of seasoning. Highly recommend!',
    style: ['overlay'],
  },
  {
    name: 'Emily Smith',
    review:
      'Best espresso I’ve ever had! Rich and bold, and paired perfectly with a warm croissant. My new favorite spot for breakfast.',
    style: ['primary'],
  },
  {
    name: 'David Williams',
    review:
      "I’m in love with their caramel macchiato! It's sweet, smooth, and just the right balance of coffee and caramel. 5 stars all the way!",
    style: ['secondary'],
  },
  {
    name: 'Olivia Brown',
    review:
      'The chocolate cake was divine—moist, rich, and paired so well with their specialty coffee. Great ambiance, great service, can’t wait to return!',
    style: ['overlay'],
  },
];

function createReviewNode(review) {
  // Create the review container div
  const reviewDiv = document.createElement('div');
  reviewDiv.classList.add('review', ...(review.style ?? []));

  // Accessibility attributes
  reviewDiv.setAttribute('role', 'listitem');
  reviewDiv.setAttribute('tabindex', '0');

  // Create the review text paragraph
  const reviewText = document.createElement('p');
  reviewText.classList.add('review-text');
  reviewText.textContent = review.review;
  reviewText.setAttribute('aria-label', `Review Text ${review.review}`);

  // Create the review user paragraph
  const reviewUser = document.createElement('p');
  reviewUser.classList.add('review-user');
  reviewUser.textContent = `~ ${review.name} ~`;
  reviewUser.setAttribute('aria-label', `Review by ${review.name}`);

  // Append the text and user paragraphs to the review div
  reviewDiv.appendChild(reviewText);
  reviewDiv.appendChild(reviewUser);

  return reviewDiv;
}

document.addEventListener('WebAppInvoker_ContentLoading', () => {
  const reviewContainer = document.getElementById('reviews-container');
  reviews.forEach((review) => {
    const reviewNode = createReviewNode(review);
    reviewContainer.appendChild(reviewNode);
  });
});

export default template;

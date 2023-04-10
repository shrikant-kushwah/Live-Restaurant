import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '₹2925',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '₹1099',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '₹2099',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '₹299',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '₹999',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹1299',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹999',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹499',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹2499',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₹699',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'You have to taste a culture to understand it.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle:'You have to taste a culture to understand it.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'You have to taste a culture to understand it.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'You have to taste a culture to understand it.',
  },
];

export default { wines, cocktails, awards };

// Literal Types
// 1. Based on what we have learnt about literal types with the price, can you make
// a Country literal type? You only have to include the countries we are dealing with in 
// the project.
// 2. Can you create a file and store all your types aliases in there?

import { showReviewTotal, populateUser, getTopTwoReviews } from '../src/utlis';
import { Permissions, LoyaltyUser } from '../src/enums';
import { Price, Country } from '../src/types';

const propertyContainer = document.querySelector('.properties') as HTMLElement
const reviewContainer = document.querySelector('.reviews') as HTMLElement
const container = document.querySelector('.container') as HTMLElement
const button = document.querySelector('button') as HTMLElement
const footer = document.querySelector('.footer') as HTMLElement

let isLoggedIn: boolean;

interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}

// Reviews
const reviews : Review[]= [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '27-03-2021',
        description: 12345
    },
]

const you = {
  firstName: 'Bobby',
  lastName: 'Brown',
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

//Properties
const properties : {
  image: string;
  title: string;
  price: number;
  location: {
      firstLine: string;
      city: string;
      code: number;
      country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}[] = [
  {
      image: '../images/colombia-property.jpg',
      title: 'Colombian Shack',
      price: 45,
      location: {
          firstLine: 'shack 37',
          city: 'Bogota',
          code: 45632,
          country: 'Colombia'
      },
      contact: [+1123495082908, 'marywinkle@gmail.com'],
      isAvailable: true  
  },
  {
      image: '../images/poland-property.jpg',
      title: 'Polish Cottage',
      price: 34,
      location: {
          firstLine: 'no 23',
          city: 'Gdansk',
          code: 343903,
          country: 'Poland'
      },
      contact: [+1123495082908, 'garydavis@hotmail.com'],
      isAvailable: false 
  },
  {
      image: '../images/london-property.jpg',
      title: 'London Flat',
      price: 23,
      location: {
          firstLine: 'flat 15',
          city: 'London',
          code: 35433,
          country: 'United Kingdom',
      },
      contact: [+1123495082908, 'andyluger@aol.com'],
      isAvailable: true
  }
]
// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)

isLoggedIn = true

function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       element.appendChild(priceDisplay)
   }
}

// Add the properties
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = properties[i].title
  const image = document.createElement('img')
  image.setAttribute('src', properties[i].image)
  card.appendChild(image)
  showDetails(you.permissions, card, properties[i].price)
  propertyContainer.appendChild(card)
}


//Broken code
let count = 0
function addReviews(array: {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}[] ) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))

let currentLocation : [string, string, number] = ['South Africa', '16.43', 21]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'
import { LoyaltyUser, Permissions } from "../src/enums";
import  { Review }  from '../src/interfaces';

const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement

export function showReviewTotal(value: number, reviewer: string, _isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : '';
    
    reviewTotalDisplay.innerHTML = value.toString() + 'Review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning : boolean, firstName: string ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = firstName
}

export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}
export function makeMultiple(value: number) : string {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
}
// Fixed
export function getTopTwoReviews(reviews: Review[]): Review[] {
    // Clone the array and sort it to avoid mutating the original array
    const sortedReviews = [...reviews].sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2); // Return the top two reviews
}
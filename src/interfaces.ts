import { LoyaltyUser } from '../src/enums';
import { Price, Country } from '../src/types'

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
  }

  
export interface Property {
  image: string;
  title: string;
  price: Price;
  location: {
      firstLine: string;
      city: string;
      code: number | string;
      country: Country
  }
  contact: [ number, string];
  isAvailable: boolean;
}
import { Injectable } from '@angular/core';
import { productObjects } from './productObjects';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductDbService {

  getProducts(): Array<Product> { return productObjects; }
}

import { Component } from '@angular/core';
import { productList } from '../productList';
import { Utils } from '../utils';
import { Constants } from '../constants';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ]
})
export class ProductListComponent {
  products: Array<Product> = productList;

  //https://buycontactlenssolutions.com/#purilens-plus-12-bottle-pack
  getProductUrl(product: Product): string {
    return Utils.getProductUrl(product.id);
  }

  // https://buycontactlenssolutions.com/images/purilens-plus-12-bottle-pack.jpeg 
  getMainImageUrl(product: Product): string {
    return Utils.getImagePath(Constants.webUrl, product.id, Constants.largeImageSizeType, Constants.jpegImageType);
  }

  // ./images/purilens-plus-12-bottle-pack.jpeg
  getMainImagePath(product: Product): string {
    return Utils.getImagePath(Constants.currentDir, product.id, Constants.largeImageSizeType, Constants.jpegImageType);
  }

  // ./images/purilens-plus-12-bottle-pack.jpeg 406w
  getMainImagePathWithWidth(product: Product): string {
    return Utils.getImagePath(Constants.currentDir, product.id, Constants.largeImageSizeType, Constants.jpegImageType);
  }

  // ./images/purilens-plus-12-bottle-pack.jpeg
  getLargeImagePath(product: Product, imageType: string): string {
    return Utils.getImagePath(Constants.currentDir, product.id, Constants.largeImageSizeType, imageType);
  }

  // ./images/purilens-plus-12-bottle-pack-smaller.webp 406w, 
  getImagePathsWithWidth(product: Product, imageType: string): string {
    let imagePathsWithWidth: Array<string> = [];
    for (let imageSize of product.image.sizes) {
      let imagePathWithWidth = imageSize.getImagePathWithWidth(Constants.currentDir, product.id, imageType);
      imagePathsWithWidth.push(imagePathWithWidth);
    }
    return imagePathsWithWidth.toString();
  }
}

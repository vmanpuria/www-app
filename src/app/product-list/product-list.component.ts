import { Component } from '@angular/core';
import { products } from '../products';
import { Utils } from '../utils';
import { ImageSize } from '../imageSize';
import { Constants } from '../constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ]
})
export class ProductListComponent {
  products = products;

  //https://buycontactlenssolutions.com/#purilens-plus-12-bottle-pack
  getProductUrl(id: string): string {
    return Utils.getProductUrl(id);
  }

  // https://buycontactlenssolutions.com/images/purilens-plus-12-bottle-pack.jpeg 
  getLargeImageUrl(id: string): string {
    return Utils.getImagePath(Constants.webUrl, id, Constants.largeImageSizeType, Constants.jpegImageType);
  }

  // ./images/purilens-plus-12-bottle-pack-smaller.webp 406w, 
  getImagePathsWithWidth(id: string, imageType: string, imageSizes: ImageSize[]): string {
    let imagePathsWithWidth: Array<string> = [];
    for (var imageSize of imageSizes) {
      imagePathsWithWidth.push(imageSize.getImagePathWithWidth(Constants.currentDir , id, imageType));
    }
    return imagePathsWithWidth.toString();
  }
}

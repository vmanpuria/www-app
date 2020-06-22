import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';
import { Constants } from '../constants';
import { productObjects } from '../productObjects';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ]
})
export class ProductListComponent implements OnInit {
  products = productObjects;

  ngOnInit(): void {
  }

  //https://buycontactlenssolutions.com/#purilens-plus-12-bottle-pack
  getProductUrl(product): string {
    return Utils.getProductUrl(product.id);
  }

  // https://buycontactlenssolutions.com/images/purilens-plus-12-bottle-pack.jpeg 
  getMainImageUrl(product): string {
    return Utils.getImagePath(Constants.webUrl, product.id, Constants.largeImageSizeType, Constants.jpegImageType);
  }

  // ./images/purilens-plus-12-bottle-pack.jpeg
  getMainImagePath(product): string {
    return Utils.getImagePath(Constants.currentDir, product.id, Constants.largeImageSizeType, Constants.jpegImageType);
  }

  // ./images/purilens-plus-12-bottle-pack.jpeg 406w
  getMainImagePathWithWidth(product): string {
    return Utils.getImagePath(Constants.currentDir, product.id, Constants.largeImageSizeType, Constants.jpegImageType);
  }

  // ./images/purilens-plus-12-bottle-pack.jpeg
  getLargeImagePath(product, imageType: string): string {
    return Utils.getImagePath(Constants.currentDir, product.id, Constants.largeImageSizeType, imageType);
  }

  // ./images/purilens-plus-12-bottle-pack-smaller.webp 406w, 
  getImagePathsWithWidth(product, imageType: string): string {
    let imagePathsWithWidth: Array<string> = [];
    for (let imageSize of product.image.sizes) {
      let imagePathWithWidth = Utils.getImagePathWithWidth(Constants.currentDir, product.id, imageSize.type, imageType, imageSize.width);
      imagePathsWithWidth.push(imagePathWithWidth);
    }
    return imagePathsWithWidth.toString();
  }
}

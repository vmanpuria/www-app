import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';
import { Constants } from '../constants';
import { Product } from '../product';
import { ProductDbService } from '../product-db.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ]
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(productDb: ProductDbService) {
    this.products = productDb.getProducts()
  }

  ngOnInit(): void {
  }

  //https://buycontactlenssolutions.com/#purilens-plus-12-bottle-pack
  getProductUrl(product: Product): string {
    return Utils.getProductUrl(product);
  }

  getMainImageUrl(product: Product): string {
    return Utils.getMainImageUrl(product);
  }

  // ./images/purilens-plus-12-bottle-pack.jpeg
  getMainImagePath(product: Product): string {
    return Utils.getImagePath(Constants.currentDir, product, Constants.largeImageSizeType, Constants.jpegImageType);
  }

  // ./images/purilens-plus-12-bottle-pack.jpeg
  getLargeImagePath(product: Product, imageType: string): string {
    return Utils.getImagePath(Constants.currentDir, product, Constants.largeImageSizeType, imageType);
  }

  // ./images/purilens-plus-12-bottle-pack-smaller.webp 406w,
  getImagePathsWithWidth(product: Product, imageType: string): string {
    let imagePathsWithWidth: Array<string> = [];
    for (let imageSize of product.image.sizes) {
      let imagePathWithWidth = Utils.getImagePathWithWidth(Constants.currentDir, product, imageSize.type, imageType, imageSize.width);
      imagePathsWithWidth.push(imagePathWithWidth);
    }
    return imagePathsWithWidth.toString();
  }

  // ./images/purilens-plus-12-bottle-pack-smaller.jpeg 406w,
  getJpegImagePathsWithWidth(product: Product): string {
    let imagePathsWithWidth: Array<string> = [];
    for (let imageSize of product.image.sizes) {
      let imagePathWithWidth = Utils.getImagePathWithWidth(Constants.currentDir, product, imageSize.type, Constants.jpegImageType, imageSize.width);
      imagePathsWithWidth.push(imagePathWithWidth);
    }
    return imagePathsWithWidth.toString();
  }
}

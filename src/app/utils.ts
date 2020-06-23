import { Constants } from './constants';
import { Product } from './product';

export class Utils {
  //purilens-plus-12-bottle-pack-smaller.webp
  static getImageName(product: Product, imageSizeType: string, imageType: string): string {
    let id = this.getImageId(product);
    let imageSizeTypePrefix = (imageSizeType == Constants.largeImageSizeType) ? '' : '-' + imageSizeType;
    return id + imageSizeTypePrefix + '.' + imageType;
  }

  //<uri>/images/purilens-plus-12-bottle-pack-smaller.webp
  static getImagePath(uri: string, product: Product, imageSizeType: string, imageType: string): string {
    return uri + '/' + Constants.imagesDir + '/' + this.getImageName(product, imageSizeType, imageType);
  }

  //https://buycontactlenssolutions.com/#purilens-plus-12-bottle-pack
  static getProductUrl(product: Product): string {
    return Constants.webUrl + '/#' + product.id;
  }

  private static getImageId(product: Product): string {
    return (product.image.id == undefined) ? product.id : product.image.id;
  }

  //<image> 406w
  private static addWidth(image: string, width: number): string {
    return image + ' ' + String(width) + 'w';
  }

  //<uri>/images/purilens-plus-12-bottle-pack-smaller.webp 406w
  static getImagePathWithWidth(uri:string, product: Product, imageSizeType: string, imageType: string, imageWidth: number): string {
    let imagePath = Utils.getImagePath(uri, product, imageSizeType, imageType);
    return Utils.addWidth(imagePath, imageWidth);
  }
}

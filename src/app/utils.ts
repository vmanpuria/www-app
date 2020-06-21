import { Constants } from './constants';

export class Utils {
  //purilens-plus-12-bottle-pack-smaller.webp
  static getImageName(id: string, imageSizeType: string, imageType: string): string {
    let imageSizeTypePrefix = (imageSizeType == Constants.largeImageSizeType) ? '' : '-' + imageSizeType;
    return id + imageSizeTypePrefix + '.' + imageType;
  }

  //<uri>/images/purilens-plus-12-bottle-pack-smaller.webp
  static getImagePath(uri: string, id: string, imageSizeType: string, imageType: string): string {
    return uri + '/' + Constants.imagesDir + '/' + this.getImageName(id, imageSizeType, imageType);
  }

  //https://buycontactlenssolutions.com/#purilens-plus-12-bottle-pack
  static getProductUrl(id: string): string {
    return Constants.webUrl + '/#' + id;
  }
}

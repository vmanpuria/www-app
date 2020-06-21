import { Utils } from './utils';

export class ImageSize {
  sizeType: string;
  width: number;

  //<image> 406w
  private addWidth(image: string): string {
    return image + ' ' + String(this.width) + 'w';
  }

  //<uri>/images/purilens-plus-12-bottle-pack-smaller.webp 406w
  getImagePathWithWidth(uri:string, id: string, imageType: string): string {
    return this.addWidth(Utils.getImagePath(uri, id, this.sizeType, imageType));
  }
}

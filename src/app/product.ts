import { Utils } from './utils';

export class Paypal {
  buttonId: string;

  constructor(buttonId: string) {
    this.buttonId = buttonId;
  }
};

export class ImageSize {
  type: string;
  width: number;

  constructor(type: string, width: number) {
    this.type = type;
    this.width = width;
  }

  //<image> 406w
  private addWidth(image: string): string {
    return image + ' ' + String(this.width) + 'w';
  }

  //<uri>/images/purilens-plus-12-bottle-pack-smaller.webp 406w
  getImagePathWithWidth(uri:string, id: string, imageType: string): string {
    let imagePath = Utils.getImagePath(uri, id, this.type, imageType);
    return this.addWidth(imagePath);
  }
};

export class Image {
  types: Array<string>;
  sizes: Array<ImageSize>;

  constructor(types: Array<string>, sizes: Array<ImageSize>) {
    this.types = types;
    this.sizes = sizes;
  }
};

export class Product {
  name: string;
  id: string;
  description: string;
  sku: string;
  gtin12: string;
  brand: string;
  price: number;
  features: Array<string>;
  image: Image;
  paypal: Paypal;

  constructor(name: string, id: string, description: string, sku: string, gtin12: string, brand: string, price: number, features: Array<string>, image: Image, paypal: Paypal) {
    name = name;
    id = id;
    description = description;
    sku = sku;
    gtin12 = gtin12;
    brand = brand;
    price = price;
    features = features;
    image = image;
    paypal = paypal;
  }
};

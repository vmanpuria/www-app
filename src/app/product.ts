export interface Paypal {
  buttonId: string;
};

export interface ImageSize {
  type: string;
  width: number;
};

export interface Image {
  id?: string,
  types: Array<string>;
  sizes: Array<ImageSize>;
};

export interface Product {
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
};

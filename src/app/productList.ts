import { Product, Image,  ImageSize, } from './product';

export const productList: Array<Product> = getProductList();

function getProductList(): Array<Product> {
  let productList: Array<Product> = [];
  for(let productObject of productObjects) {
    let imageSizes: Array<ImageSize> = [];
    for (let imageSize of productObject.image.sizes) {
      imageSizes.push(new ImageSize(imageSize.type, imageSize.width))
    };
    let image = new Image(productObject.image.types, imageSizes);
    let product = new Product(productObject.name, productObject.id, productObject.description,productObject.sku, productObject.gtin12, productObject.brand, productObject.price, productObject.features, image, productObject.paypal);
    productList.push(product);
  }
  return productList;
}

export const productObjects = [
  {
    name: 'PuriLens Plus 12 bottles, 4 oz each, Preservative Free Saline',
    id: 'purilens-plus-12-bottle-pack',
    description: "PuriLens Plus Preservative Free Saline is pH-balanced to eye's natural tears for superior comfort. The solution maximizes contact lens comfort and clarity for all contact lens wearers. It has the same formulation as Unisol 4.",
    sku: '830002000025',
    gtin12: '830002000025',
    brand: 'Purilens',
    price: 65.99,
    features: [
      "pH-balanced to eye's natural tears for superior comfort",
      'For dry and sensitive eyes',
      'For all contact lens wearers',
      'Maximizes contact lens comfort and clarity',
      'Same formulation as Unisol 4' 
    ],
    image: {
      types: [ 'webp', 'jpeg' ],
      sizes: [
        {
          type: 'smallest',
          width: 308
        },
        {
          type: 'smaller',
          width: 406
        },
        {
          type: 'small',
          width: 616
        },
        {
          type: 'medium',
          width: 923
        },
        {
          type: 'large',
          width: 1231
        }
      ]
    },
    paypal: {
      buttonId: '429MYS54NGDMW'
    }
  }
];

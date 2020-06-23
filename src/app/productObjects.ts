import { Product } from './product';

//$ npm install --save angular-in-memory-web-api
//import {InMemoryDbService} from 'angular-in-memory-web-api'
//https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/
export const productObjects: Array<Product> = [
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
  },
  {
    name: 'PuriLens Plus 3 bottles, 4 oz each, Preservative Free Saline',
    id: 'purilens-plus-3-bottle-pack',
    description: "PuriLens Plus Preservative Free Saline is pH-balanced to eye's natural tears for superior comfort. The solution maximizes contact lens comfort and clarity for all contact lens wearers. It has the same formulation as Unisol 4.",
    sku: '830002000087',
    gtin12: '830002000087',
    brand: 'Purilens',
    price: 21.99,
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
          width: 173
        },
        {
          type: 'smaller',
          width: 228
        },
        {
          type: 'small',
          width: 345
        },
        {
          type: 'medium',
          width: 518
        },
        {
          type: 'large',
          width: 690
        }
      ]
    },
    paypal: {
      buttonId: 'W7ZKPJRAE34S8'
    }
  },
  {
    name: 'Lobob Optimum Extra Strength Cleaner, 2 oz',
    id: 'lobob-esc-2-oz',
    description: "Optimum ESC solution is a non-preserved cleaning solution for use with fluorosilicone acrylate and silicone acrylate rigid gas permeable (RGP) and hard contact lenses. ",
    sku: '10250',
    gtin12: '034672102502',
    brand: 'Lobob',
    price: 45.99,
    features: [
      "Sterile Cleaning, Non-preserved cleaning solution",
      'for Rigid Gas Permeable Contact Lenses (Fluorosilicone acrylate and silicone acrylate',
      'and for hard contact lenses.'
    ],
    image: {
      types: [ 'webp', 'jpeg' ],
      sizes: [
        {
          type: 'smallest',
          width: 113
        },
        {
          type: 'smaller',
          width: 149
        },
        {
          type: 'small',
          width: 225
        },
        {
          type: 'medium',
          width: 338
        },
        {
          type: 'large',
          width: 450
        }
      ]
    },
    paypal: {
      buttonId: 'HG7YCQJW8RZK2'
    }
  },
  {
    name: 'Lobob Optimum Cleaning Disinfecting and Storage Solution, 4 oz',
    id: 'lobob-cds-4-oz',
    description: "Optimum CDS solution is a sterile Cleaning, Disinfecting and Storing solution for use with fluorosilicone acrylate and silicone acrylate rigid gas permeable (RGP) and hard contact lenses. It contains no Polyquad, Chlorhexidine, Polyaminopropyl Biguanide or BAK",
    sku: '10268',
    gtin12: '034672102687',
    brand: 'Lobob',
    price: 59.99,
    features: [
      "Sterile Cleaning, Disinfecting and Storage solution",
      'for Rigid Gas Permeable Contact Lenses (Fluorosilicone acrylate and silicone acrylate',
      'and for hard contact lenses.'
    ],
    image: {
      types: [ 'webp', 'jpeg' ],
      sizes: [
        {
          type: 'smallest',
          width: 150
        },
        {
          type: 'smaller',
          width: 198
        },
        {
          type: 'small',
          width: 300
        },
        {
          type: 'medium',
          width: 450
        },
        {
          type: 'large',
          width: 600
        }
      ]
    },
    paypal: {
      buttonId: '8MQARVVFPFGQW'
    }
  },
  {
    name: 'ScleralFil, Preservative Free Saline Solution, 5 vials, 0.34 oz each',
    id: 'scleralfil-10-ml-5-vials',
    description: "ScleralFil is a buffered preservative-free saline in 10mL/0.34oz use and discard tubes",
    sku: '310119303689',
    gtin12: '310119303689',
    brand: 'Bausch+Lomb',
    price: 10.99,
    features: [
      "Preservative-free saline solution",
      'Rinsing and insertion Solution',
      'For Soft and Rigid Gas Permeable Lenses.',
      'Carry-On Size.'
    ],
    image: {
      types: [ 'webp', 'jpeg' ],
      sizes: [
        {
          type: 'smallest',
          width: 202
        },
        {
          type: 'smaller',
          width: 266
        },
        {
          type: 'small',
          width: 403
        },
        {
          type: 'medium',
          width: 605
        },
        {
          type: 'large',
          width: 806
        }
      ]
    },
    paypal: {
      buttonId: '7UQCPF37UUL4J'
    }
  },
  {
    name: 'ScleralFil, Preservative Free Saline Solution, 30 vials, 0.34 oz each',
    id: 'scleralfil-saline-solution-30-vials',
    description: "ScleralFil is a buffered preservative-free saline in 10mL/0.34oz use and discard tubes",
    sku: '310119303696',
    gtin12: '310119303696',
    brand: 'Bausch+Lomb',
    price: 29.99,
    features: [
      "Preservative-free saline solution",
      'Rinsing and insertion Solution',
      'For Soft and Rigid Gas Permeable Lenses.',
      'Carry-On Size.'
    ],
    image: {
      types: [ 'webp', 'jpeg' ],
      sizes: [
        {
          type: 'smallest',
          width: 253
        },
        {
          type: 'smaller',
          width: 333
        },
        {
          type: 'small',
          width: 505
        },
        {
          type: 'medium',
          width: 758
        },
        {
          type: 'large',
          width: 1010
        }
      ]
    },
    paypal: {
      buttonId: 'F2VGK6AMNUPXC'
    }
  },
  {
    name: 'Surgical Cone Mask, Blue, 10-pack',
    id: 'surgical-cone-mask-blue-10-pack',
    description: "Blue surgical cone-style face mask with a malleable nosepiece allows a custom fit. The cone-shaped mask enables easy donning and is held away from the nose and mouth for comfort and protection.",
    sku: '011822334044',
    gtin12: '011822334044',
    brand: 'Unbranded',
    price: 9.99,
    features: [
      "Surgical Cone-Style Face Mask, Blue",
      'The cone-shaped mask enables easy donning and is held away from the nose and mouth for comfort and protection',
      'A malleable nosepiece allows a custom fit.',
      'Designed with comfortable, rounded edges.'
    ],
    image: {
      id: 'surgical-cone-mask-blue',
      types: [ 'webp', 'jpeg' ],
      sizes: [
        {
          type: 'smallest',
          width: 159
        },
        {
          type: 'smaller',
          width: 210
        },
        {
          type: 'small',
          width: 319
        },
        {
          type: 'medium',
          width: 478
        },
        {
          type: 'large',
          width: 637
        }
      ]
    },
    paypal: {
      buttonId: 'HZA2AP82HPET2'
    }
  }
];

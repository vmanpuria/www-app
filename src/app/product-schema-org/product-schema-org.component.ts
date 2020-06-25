import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Product } from '../product';
import { Utils } from '../utils';

@Component({
  selector: 'app-product-schema-org',
  templateUrl: './product-schema-org.component.html',
  styleUrls: ['./product-schema-org.component.css']
})
export class ProductSchemaOrgComponent implements OnInit {

  @Input() product: Product;
  jsonLD: SafeHtml;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const json = this.getProductSchemaOrgJson(this.product);
    this.jsonLD = this.getSafeHTML(json);
  }

  getSafeHTML(value: {}) {
    // If value convert to JSON and escape / to prevent script tag in JSON
    const json = value
      ? JSON.stringify(value, null, 2).replace(/\//g, '\\/')
    //  ? JSON.stringify(value, null, 2)
      : '';
    const html = `<script type="application/ld+json">${json}</script>`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getProductSchemaOrgJson(product: Product): {}
  {
    return {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.name,
      "image": [
        Utils.getMainImageUrl(product)
      ],
      "description": product.description,
      "sku": product.sku,
      "gtin12": product.gtin12,
      "brand": {
        "@type": "Brand",
        "name": product.brand
      },
      "offers": {
        "@type": "Offer",
        "url": Utils.getProductUrl(product),
        "priceCurrency": "USD",
        "price": product.price,
        "priceValidUntil": "2021-12-31",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0.00"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "USA"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": "1",
              "maxValue": "3",
              "unitCode": "d"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": "2",
              "maxValue": "5",
              "unitCode": "d"
            }
          }
        },
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "BuyContactLensSolutions.com"
        }
      }
    }
  }
}

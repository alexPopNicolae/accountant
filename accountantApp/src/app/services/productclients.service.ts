import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductClient {
  products = [
    {
      id: 1,
      denumire: 'denumire 1',
      categorie: 'masinia',
      furnizor: 'furnizor1',
      descriere: 'descriere 1',
      notes: [
        {
          um: 'um 1',
          implicit: false,
          note: 'aceatsa este nota 1'
        }
      ]
    },
    {
      id: 2,
      denumire: 'denumire 2',
      categorie: 'masinia 2',
      furnizor: 'furnizor2',
      descriere: 'descriere 2',
      notes: [
        {
          um: 'um 2',
          implicit: false,
          note: 'aceatsa este nota 2'
        }
      ]
    },
    {
      id: 3,
      denumire: 'denumire 3',
      categorie: 'masinia',
      furnizor: 'furnizor3',
      descriere: 'descriere 3',
      notes: [
        {
          um: 'um 3',
          implicit: false,
          note: 'aceatsa este nota 3'
        }
      ]
    }
  ];

  getProducts() {
    return this.products;
  }
}

import { Component } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  imgParent = '';

  products: Product[] = [
     {
        id: '1',
        name: 'Product 1',
        price: 100,
        image: './assets/image/product.jpg'
     },
     {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/image/bike.jpg'
   },
   {
      id: '3',
      name: 'Colección de albunes',
      price: 34,
      image: './assets/image/collections.jpg'
    },
    {
      id: '4',
      name: 'Mislibros',
      price: 565,
      image: './assets/image/books.jpg'
    },
    {
      id: '5',
      name: 'Gafas para que vayas a la playa',
      price: 23,
      image: './assets/image/glases.jpg'
   },
   {
    id: '6',
    name: 'Para tu mascota',
    price: 165,
    image: './assets/image/pet.jpg'
 },
  ];

  onLoaded (img: string){
    console.log('log padre', img);
  }
}

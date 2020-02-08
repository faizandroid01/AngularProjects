import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Masala Dosa', 'Spicy South Indian Dish.', 'https://lh3.googleusercontent.com/proxy/tH_iag031ey5_j1rjig2BssDRLOf6pE0UegFM_H-tUZAi4XCo-ZdBLxAhjNTzj3oLbl4ivc7yB0PJB1v65ACHHgZsYAkWDhi3xXAEh82OcpjUzBK7bWVjZWbmuIJs-R3EX9UoH3Yamuo65keZEt2Si4lhi-Vc20KZv9dxmLYyxgOkHYEtax-o8ah9lNz6t2kcg8dGJ2AYkkJ'),
    new Recipe('Pizza', 'Peppy Paneer \' Dominos', 'https://d2mekbzx20fc11.cloudfront.net/uploads/web.Mediterranean-Lamb_2018_600x600.png'),
    new Recipe('Death By Choclate', 'Polar bear Delicious', 'https://cdn.shopify.com/s/files/1/0918/2274/products/death-by-chocolate-cake-chocolate-cake-ennoble-eat-cake-today-birthday-cake-delivery-klpjmalaysia-583920_grande.jpg?v=1578916850'),
    new Recipe('Gazar Ka Halwa', 'Delicious Carrot Grind', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Gajjar_ka_halwa_%28carrot_halwa%29.JPG/1200px-Gajjar_ka_halwa_%28carrot_halwa%29.JPG')
  ]

  constructor() { }

  ngOnInit() {
  }

}

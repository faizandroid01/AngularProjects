import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Masala Dosa', 'Spicy South Indian Dish.', 'https://lh3.googleusercontent.com/proxy/O1fPsJgoHt6-KTEozrkRl5B7ioQXYSrYncOUA3ZwycMwJVoVwnrX7PHeouzu2PiIZS_S_KNo4hTfWa5pJWohRwssOstZdzJeW8WPvpG0VzunqWC9X89rJxRW_xQ_F5PmbfyBjzk2Ej3OaEUutXIF8nYYC0YplIaM9rBR7qHRA1bCz_lbfbUU3Hp-ka9iNqq_N9Ju'),
    new Recipe('Pizza', 'Peppy Paneer \' Dominos', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRI7x6SrbUS4imWE5uM5JdFS5boDkJPUex-nakP3ZkzCbEwXsK5'),
  ]

  constructor() { }

  ngOnInit() {
  }

}

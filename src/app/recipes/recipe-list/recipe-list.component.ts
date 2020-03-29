import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is description','https://images.theweek.com/sites/default/files/styles/tw_image_9_4/public/istock-527028804.jpg?itok=VtQBDIcm&resize=450x200')
  ];

  constructor() { }

  ngOnInit() {
  }

}

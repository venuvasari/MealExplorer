import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from './Search.service';
import { Meal } from './Meal';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm!: FormGroup;
  mealData!: Meal[];
  recipeDetails!:any;
  activeTab!:number;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.formData();

  }

  formData() {
    this.searchForm = new FormGroup({
      mealName: new FormControl('', Validators.required)
    })
  }

  searchMeal() {
    const name: string = this.searchForm.value.mealName;
    console.log(this.searchForm.value.mealName);
    this.searchService.getMeals(name).subscribe((data) => {
      this.mealData = data.meals;
    }); 

  }

  selectedMeal(index: number){
    this.activeTab=index;
    this.recipeDetails=this.mealData[index]
    console.log(typeof this.recipeDetails);   
      
  }



}

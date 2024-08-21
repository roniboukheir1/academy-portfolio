import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { ICategory } from '../../Interfaces/ICategory';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  categories: ICategory[] = [];
  
  constructor(private categoriesService: CategoryService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe({
      next: value => {
        this.categories = value;
      }
    }
);
  }
}

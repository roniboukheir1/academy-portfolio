import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './Components/projects/projects.component';
import { MultiSelectComponent } from './Components/multi-select/multi-select.component';
import { CategoryService } from './Services/category.service';
import { ICategory } from './Interfaces/ICategory';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectsComponent, MultiSelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'protfolio'; 

  items : ICategory[] = []
  constructor(private service: CategoryService) { }
  ngOnInit(): void {
this.service.getCategories().subscribe({
  next: value => {
    this.items = value;
  }
});

  }

}


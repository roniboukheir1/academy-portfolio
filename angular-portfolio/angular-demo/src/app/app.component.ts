import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProjectsComponent} from "./components/projects/projects.component";
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root-christy',
  standalone: true,
  imports: [RouterOutlet, ProjectsComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-demo';
}

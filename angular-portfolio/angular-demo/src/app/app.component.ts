import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProjectsComponent} from "./components/projects/projects.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root-christy',
  standalone: true,
  imports: [RouterOutlet, ProjectsComponent, NavbarComponent, ProfileComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-demo';

  constructor(private http : HttpClient){}

  aboutDetails = {
    experience: '4+ years Web Development',
    education: 'B.Sc. Bachelors Degree\nUniversity Name'
  };

  onDetailSelected(detailType: string) {
    console.log(`${detailType} detail was clicked!`);
  }


  callApiHandler(){
    this.http.get("https://www.example.com").subscribe((res) => {});
  }


}

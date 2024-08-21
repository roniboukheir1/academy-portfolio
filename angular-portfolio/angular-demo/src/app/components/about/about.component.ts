import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  @Input() details: {experience : string; education: string} = {experience: '', education: ''};
  @Output() detailClicked = new EventEmitter<string>();

  onDetailClicked(detailType : string) {
    this.detailClicked.emit(detailType);
  }
}

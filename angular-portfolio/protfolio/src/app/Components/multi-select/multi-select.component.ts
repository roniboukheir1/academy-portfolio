import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { ICategory } from '../../Interfaces/ICategory';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss',
})
export class MultiSelectComponent implements OnInit, OnChanges {
  @Input() items: ICategory[] = []
  @Output() selectionChange = new EventEmitter<any[]>();
  isDropdownVisible = false
  filteredItems: any[] = []
  private elementRef = inject(ElementRef)


  people: any[] = []


  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.people)
    this.filteredItems = changes['items'].currentValue;
  }

  ngOnInit() {
    console.log(this.items);
    this.filteredItems = this.items
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownVisible = false
    }
  }

  filterItems(event: Event) {
    const searchItem = (event.target as HTMLInputElement).value.toLocaleLowerCase();
    this.filteredItems = this.items.filter(item => item.name.toLowerCase().includes(searchItem))
  }

  toggleItem(item: ICategory, event: MouseEvent) {
    event.stopPropagation()
    item.selected = !item.selected
    this.selectionChange.emit(this.items.filter(i => i.selected))
  }

  removeItem(item: ICategory, event: MouseEvent) {
    event.stopPropagation()
    item.selected = false
    this.selectionChange.emit(this.items.filter(i => i.selected))
  }

  showDropdown() {
    this.isDropdownVisible = true
  }

}
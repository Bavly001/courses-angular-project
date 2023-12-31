import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  searchValue: string = '';

  @Output()
  searchValueText: EventEmitter<string> = new EventEmitter<string>();

  changeSearchValue() {
    this.searchValueText.emit(this.searchValue);
  }
}

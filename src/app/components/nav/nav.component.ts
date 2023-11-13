import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output()
  searchTextValue: EventEmitter<string> = new EventEmitter<string>();

  searchValueChange(value: string) {
    this.searchTextValue.emit(value);
  }
}

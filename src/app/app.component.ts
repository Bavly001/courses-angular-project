import { Component } from '@angular/core';

@Component({
  selector: 'main-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchValue: string = '';

  changeSearchValue(value: any) {
    this.searchValue = value;
  }
}

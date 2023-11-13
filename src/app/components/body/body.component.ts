import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() searchValue: string = '';
  filteredValue: string = '';

  @ViewChild(CoursesComponent, { static: true }) coursesComp: CoursesComponent;
}

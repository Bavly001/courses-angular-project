import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-courses-filter',
  templateUrl: './courses-filter.component.html',
  styleUrls: ['./courses-filter.component.css'],
})
export class CoursesFilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // console.log(this.coursesNumbers)
  }
  courseType: string = 'All';
  coursesTypes: string[] = ['All', 'Premium', 'Free'];

  @Input() allCoursesLength: number | undefined;
  @Input() premiumCoursesLength: number | undefined;
  @Input() freeCoursesLength: number | undefined;

  @Output()
  courseTypeChanged: EventEmitter<string> = new EventEmitter<string>();

  changeType(type: string) {
    this.courseType = type;
    this.courseTypeChanged.emit(type);
  }
}

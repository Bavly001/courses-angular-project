import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './components/body/courses/courses.component';
import { CourseCardComponent } from './components/body/courses/course-card/course-card.component';
import { CoursesFilterComponent } from './components/body/courses-filter/courses-filter.component';
import { IfDirective } from './components/body/courses/course-card/if.directive';
import { ClassDirective } from './components/body/courses/course-card/class.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    SearchBarComponent,
    CoursesComponent,
    CourseCardComponent,
    CoursesFilterComponent,
    IfDirective,
    ClassDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

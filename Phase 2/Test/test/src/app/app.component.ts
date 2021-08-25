import { Component } from '@angular/core';
import questions from './jstuf/questions.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  public questionList:{question:string, ans1:string, ans2:string, ans3:string, ans4:string, correct:string}[] = questions;
}

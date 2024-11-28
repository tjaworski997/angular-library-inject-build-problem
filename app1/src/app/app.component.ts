import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestService } from '@l1';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private testService: TestService) {
    console.log('AppComponent.constructor()');
  }

  result ={}

  ngOnInit(): void {
    this.testService.getJson().subscribe((data) => {
      this.result = data;
    });
  }

}

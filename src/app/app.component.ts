import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonToTableComponent } from './json-to-table/json-to-table.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonToTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'prabh-json-stuff';
  jsonData = [
    { name: 'John Doe', age: 25, city: 'New York' },
    { name: 'Jane Doe', age: 30, city: 'San Francisco' },
    { name: 'Bob Smith', age: 22, city: 'Los Angeles' },
    // Add more rows as needed
  ];
}

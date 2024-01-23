import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-json-to-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './json-to-table.component.html',
  styleUrl: './json-to-table.component.css',
})
export class JsonToTableComponent {
  @Input() data: any[] = [];

  get columns(): string[] {
    // Assuming all rows have the same columns
    return Object.keys(this.data.length > 0 ? this.data[0] : {});
  }

  get rows(): any[] {
    return this.data;
  }
}

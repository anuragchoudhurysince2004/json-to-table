import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-json-to-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './json-to-table.component.html',
  styleUrl: './json-to-table.component.css',
})
export class JsonToTableComponent {
  @Input() data: any[] = [];
  searchText = '';

  get columns(): string[] {
    // Assuming all rows have the same columns
    return Object.keys(this.data.length > 0 ? this.data[0] : {});
  }

  get filteredRows(): any[] {
    return this.data.filter((row) =>
      row.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}

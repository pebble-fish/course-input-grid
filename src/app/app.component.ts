import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  columnDefs = [
    { field: 'make', sortable: true, filter: true, editable: true },
    { field: 'model', sortable: true, filter: true, editable: true },
    { field: 'price', sortable: true, filter: true, editable: true }
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];
  title: any;
}
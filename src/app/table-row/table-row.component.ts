import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  @Input() users: any;
  @Input() rows: string[];
  constructor() { }
  ngOnInit() {}
  
}
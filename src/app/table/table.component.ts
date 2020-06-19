import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users: Observable<any[]>;
  rows: string[];

  constructor(private atService: UsersService) {
  }

  ngOnInit() {
    this.rows = this.atService.getRows();
    this.users = this.atService.getUsers();
  }

}
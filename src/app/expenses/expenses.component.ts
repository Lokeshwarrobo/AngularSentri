import { Component, OnInit } from '@angular/core';
import { ServicereqService } from '../servicereq.service';
import { Expenses } from '../models/expenses';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  exp:Expenses[];
  constructor(private serv:ServicereqService) { }

  ngOnInit(): void {

    this.getAllExpenses();
  }
   getAllExpenses(){
      this.serv.getExpenses().subscribe(
        data=>(this.exp=data)
      );
   }
}
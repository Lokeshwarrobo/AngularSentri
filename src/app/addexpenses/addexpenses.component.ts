import { Component, OnInit } from '@angular/core';
// import { Servicerequest } from '../models/servicerequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addexpenses',
  templateUrl: './addexpenses.component.html',
  styleUrls: ['./addexpenses.component.css']
})
export class AddexpensesComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  addexpense(data:any) {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'}  )
    //console.log(headers)
   this.http.post("http://3.7.175.86:8090/expense/addexpense",data,{ 'headers': headers }) 
   //this.http.post("http://localhost:8080/expense/addexpense",data,{ 'headers': headers }) 
   .subscribe((result)=>{
        console.warn("result",result)
        this.router.navigate(['expenses'])
        
   })
    //console.warn(data);
    
   
  }

}
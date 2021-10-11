import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addinitiate',
  templateUrl: './addinitiate.component.html',
  styleUrls: ['./addinitiate.component.css']
})
export class AddinitiateComponent implements OnInit {

  add:any=[];
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/aed/all") 
    .subscribe((result)=>{
         this.add = result
    })
  }

  addskill(data:any) {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'}  )
    //console.log(headers)
   this.http.post("http://localhost:8080/aed",data,{ 'headers': headers }) 
   .subscribe((result)=>{
        console.warn("result",result)
        this.router.navigate(['myskills'])
        
   })

}
}
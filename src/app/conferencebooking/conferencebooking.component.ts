import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-conferencebooking',
  templateUrl: './conferencebooking.component.html',
  styleUrls: ['./conferencebooking.component.css']
})
export class ConferencebookingComponent implements OnInit {
  result:any=[];
  result1:any=[];
  result2:any=[];
 
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get("http://3.7.175.86:8090/conferencebooking/allrooms") 
    .subscribe((result)=>{
         this.result = result
         console.warn(this.result)
    })

    this.http.get("http://3.7.175.86:8090/conferencebooking/allattendees") 
    .subscribe((result)=>{
         this.result1 = result
         console.warn(this.result1)
    })

    this.http.get("http://3.7.175.86:8090/conferencebooking/allrepeat") 
    .subscribe((result)=>{
         this.result2 = result
         console.warn(this.result2)
    })
   }
  

   addBooking(data:any){
   
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'}  )
    this.http.post("http://3.7.175.86:8090/conferencebooking/schedulebooking", data,{ 'headers': headers })
    .subscribe((result )=>{
      console.warn("result",result)
      this.router.navigate(['mybookings']) 
     
    })
  }

   
  }
import { Component, OnInit } from '@angular/core';
import { Servicerequest } from '../models/servicerequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-raiserequest',
  templateUrl: './raiserequest.component.html',
  styleUrls: ['./raiserequest.component.css']
})
export class RaiserequestComponent implements OnInit {
  
  serve: Servicerequest = new Servicerequest();
  constructor(private http:HttpClient, private router:Router ) { }

  ngOnInit(): void {
  }
  raiserequest(data:any) {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'}  )
    //console.log(headers)
   this.http.post("http://3.7.175.86:8090/srli",data,{ 'headers': headers }) 
   .subscribe((result)=>{
        console.warn("result",result)
        this.router.navigate(['servicerequest'])
        
   })
    //console.warn(data);
    
   
  }

  onSubmit() {
    console.log(this.serve);
  }
}

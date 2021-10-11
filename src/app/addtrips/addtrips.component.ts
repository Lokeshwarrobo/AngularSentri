import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtrips',
  templateUrl: './addtrips.component.html',
  styleUrls: ['./addtrips.component.css']
})
export class AddtripsComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  addtrip(data:any) {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'}  )
    //console.log(headers)
   this.http.post("http://3.7.175.86:8090/trips/addtrip",data,{ 'headers': headers }) 
  // this.http.post("http://localhost:8080/trips/addtrip",data,{ 'headers': headers }) 
   .subscribe((result)=>{
        console.warn("result",result)
        this.router.navigate(['trips'])
        
   })
    //console.warn(data);
    
   
  }

}
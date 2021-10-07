import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-selfservice',
  templateUrl: './selfservice.component.html',
  styleUrls: ['./selfservice.component.css']
})
export class SelfserviceComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
applyleave(data:any) {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'}  )
    //console.log(headers)
   this.http.post("http://3.7.175.86:8090/leave/request",data,{ 'headers': headers }) 
   .subscribe((result)=>{
        console.warn("result",result)
        this.router.navigate(['employeeleave'])
   })
    //console.warn(data);
    
   
  }

}
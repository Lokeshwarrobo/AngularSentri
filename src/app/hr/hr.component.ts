import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  result:any=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   this.http.get("http://3.7.175.86:8090/hr/listemployees") 
   .subscribe((result)=>{
        this.result = result
   })
  }

}
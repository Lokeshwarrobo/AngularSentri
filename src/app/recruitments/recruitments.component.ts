import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recruitments',
  templateUrl: './recruitments.component.html',
  styleUrls: ['./recruitments.component.css']
})
export class RecruitmentsComponent implements OnInit {
  allresult:any=[]
  constructor( private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get("http://3.7.175.86:8090/recruitments/allinterviews").subscribe((result)=>{
      this.allresult = result
    })
    console.log(this.allresult);
  

  }
}

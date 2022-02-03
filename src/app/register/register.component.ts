import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) {

   }

  ngOnInit(): void {
  }
 onSubmit(data:any)
{
   this.http.post(' https://e-prathibha.com/apis/register', data).subscribe((result) => {
     console.warn("result", result);
  });
  console.warn(data);
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router:Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(data:any)
  {

    this.http.post('https://e-prathibha.com/apis/login',data).subscribe((result) => {
      console.warn("result", result);
    })
    console.warn(data);
    this.router.navigateByUrl('/examList');

  }





}

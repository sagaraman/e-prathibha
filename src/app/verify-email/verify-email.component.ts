import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
  }
  onSubmit(data:any)
  {
    this.http.post('https://e-prathibha.com/apis/verifyEmail', data).subscribe((result) => {
      console.warn("result",result)
    });
    console.warn(data);
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-finish-exam',
  templateUrl: './finish-exam.component.html',
  styleUrls: ['./finish-exam.component.css']
})
export class FinishExamComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
  }
  onSubmit(data: any)
  {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    });
    headers = headers.set('id', '123');
    headers = headers.set('server_key', '123');
    headers = headers.set('tokenu', '123');
    this.http.post('https://e-prathibha.com/apis/finishExam', { headers: headers }, data).subscribe((result) => {
      console.warn("result", result);
    })
    console.warn(data);
  }

}

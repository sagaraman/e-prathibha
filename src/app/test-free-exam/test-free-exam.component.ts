import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-test-free-exam',
  templateUrl: './test-free-exam.component.html',
  styleUrls: ['./test-free-exam.component.css']
})
export class TestFreeExamComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  onSubmit(data: any)
  {
    let httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
    })
    httpHeaders = httpHeaders.set('id', '123');
    httpHeaders = httpHeaders.set('server_key', '123');
    httpHeaders = httpHeaders.set('tokenu', '123');
    this.http.post('https://e-prathibha.com/apis/test_free_exam',{headers:httpHeaders}, data).subscribe((result) => {
      console.warn("result",result)
    })
    console.warn(data);
  }

}

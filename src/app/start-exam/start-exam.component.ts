import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {
  examId: number=123;
  constructor(private http: HttpClient

  ) { }

  ngOnInit(): void {
  }
  clickMethod()
  {
    if(confirm("Are you sure to finish exam ?")) {
      console.log("Implement delete functionality here");
    }
  }
  onSubmit(data: any)
  {
    data = {'examId':this.examId};
    let header = new HttpHeaders({
     'content-type':'application/json'
    })
    header = header.set('id','123');
    header = header.set('server_key','123');
    header = header.set('tokenu', '123');
    this.http.post('https://e-prathibha.com/apis/start_exam', { header: header }, data).subscribe((result) => {
      console.warn('result', result);
    })
    console.warn(data);
  }

}

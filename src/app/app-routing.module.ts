import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamListComponent } from './exam-list/exam-list.component';
import { FinishExamComponent } from './finish-exam/finish-exam.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { TestFreeExamComponent } from './test-free-exam/test-free-exam.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path:'verifyEmail',component:VerifyEmailComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'test_free_exam',component:TestFreeExamComponent
  },
  {
    path:'start_exam/:examId',component:StartExamComponent
  },
  {
    path:'start_exam',component:StartExamComponent
  },
  {
    path:'finishExam',component:FinishExamComponent
  },
  {
    path:'examList',component:ExamListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

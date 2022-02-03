import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { TestFreeExamComponent } from './test-free-exam/test-free-exam.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { FinishExamComponent } from './finish-exam/finish-exam.component';
import { FormsModule } from '@angular/forms';
import { ExamListComponent } from './exam-list/exam-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    TestFreeExamComponent,
    StartExamComponent,
    FinishExamComponent,
    ExamListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

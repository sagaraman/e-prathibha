import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFreeExamComponent } from './test-free-exam.component';

describe('TestFreeExamComponent', () => {
  let component: TestFreeExamComponent;
  let fixture: ComponentFixture<TestFreeExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFreeExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFreeExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

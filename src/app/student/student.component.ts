import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../student.model';
import { ActionService } from '../action.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  genders = ['male','female'];
  students: Student[] = [];
  student = new Student();
  

  ngOnInit(){ 
    // this.students = this.actionService.students;
    // console.log(this.students);
  }
  
  constructor(private actionService: ActionService) {
     
   }


  onSubmit(){
    this.actionService.onSubmit(this.student,this.signupForm);
    this.student = new Student();
    this.students = this.actionService.getData();
    console.log(this.students[0]);
    console.log("hello"+this.actionService.getData());
  }


  onEdit(student:Student){
    this.actionService.onEdit(student,this.signupForm);
   
   
  }
  onSave(){
    this.actionService.onSave(this.signupForm);
   
  }
  onDelete(){
    this.actionService.onDelete();
  }
}

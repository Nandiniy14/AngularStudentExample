import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  
  students: Student[] = [];
  student : Student;
  editObj = new Student;
  edit = false;
  submitted = false;
  constructor() {
    this.student = new Student();
   }


  onSubmit(student: Student,signupForm: NgForm){
    this.submitted = true;
    this.students.push(student);
    // this.student = new Student();
    // this.user.firstname = this.signupForm.value.firstname;
    // this.user.lastname = this.signupForm.value.lastname;
    // this.user.email = this.signupForm.value.email;
    // this.user.phone = this.signupForm.value.phone;
    // this.user.department = this.signupForm.value.department;
    // this.user.gender = this.signupForm.value.gender;
    console.log(this.students[0]);
    // signupForm.reset();
  }
  getData(){
    return this.students;
  }
  onEdit(student:Student, signupForm: NgForm){
    this.editObj = student;
    signupForm.reset(student);
    
  }
  onSave(signupForm: NgForm){
    this.editObj.firstname = signupForm.value.firstname;
    this.editObj.lastname = signupForm.value.lastname;
    this.editObj.email = signupForm.value.email;
    this.editObj.phone = signupForm.value.phone;
    this.editObj.department = signupForm.value.department;
    this.editObj.gender = signupForm.value.gender;
     
  }
  onDelete(){
    let index = this.students.indexOf(this.student);
    alert("Are you sure you want to delete?");
    this.students.splice(index, 1);


  }
 

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
  
onSave(index: number, newTask:string) {
 this.taskArray[index].taskname = newTask;
 this.taskArray[index].isEditable=false;
}

onEdit(index: number) {
  this.taskArray[index].isEditable = true;
}

isComplete(index:number) {
  this.taskArray[index].isComplete = !this.taskArray[index].isComplete;
}

onDelete(index:number) {
  this.taskArray.splice(index,1);

}
  taskArray = [{taskname:"Brush Teeth", isComplete: false, isEditable:false }]
  constructor(){

  }
ngOnInit(): void {
}
onSubmit(form: NgForm) {
this.taskArray.push({
  taskname:form.controls['task'].value,
  isComplete:false,
  isEditable:false
});
form.reset();
}



}

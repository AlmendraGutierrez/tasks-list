import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
    ){  }

  ngOnInit(): void {
    //Like Promise
    this.taskService.getTasks().subscribe((tasks)=>(
      this.tasks = tasks
    ));
    ;
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(()=>(
      this.tasks = this.tasks.filter( t => t.id !== task.id )
    ))
      
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder //cambio el estado de T a F
    //console.log(task.reminder) me muestra los valores que switchea de T a F
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task){
   // console.log(task) para chequear que está andando la tarea
   this.taskService.addTask(task).subscribe((task)=> (
    this.tasks.push(task)
   ))
  }

}
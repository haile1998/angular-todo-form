import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}
// tslint:disable-next-line: variable-name
let _id = 1;
@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})
export class FormTodoComponent implements OnInit {
  todos: Array<ITodo> = [];

  form: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      todo: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  onChange() {
    if (this.form.valid) {
      const todo: ITodo = {
        id: 1,
        content: this.form.get('todo').value,
        complete: false
      };
      this.todos.push(todo);
    }
    console.log(this.form.get('todo').value);
    this.form.get('todo').setValue('');
  }

  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}

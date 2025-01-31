import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupabaseServiceService } from '../../services/supabase-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  constructor(private supabaseService: SupabaseServiceService) {}

  searchTerm: string = '';
  newTodo = { todo: '', status: false };
  todos: any[] = [];
  errorMessage: string = '';
  editID: number = 0;
  editNewTodo = { editTodo: '', editStatus: false };
  reverseValue: boolean = false;

  ngOnInit() {
    this.getTodos();
  }

  async getTodos() {
    try {
      const { data, error } = await this.supabaseService.getTodo(
        this.searchTerm
      );
      if (error) {
        this.errorMessage = error.message;
        return;
      }
      this.todos = data ?? [];
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  async addTodo() {
    try {
      const { error } = await this.supabaseService.addTodo(this.newTodo);
      if (error) {
        this.errorMessage = error.message;
      }

      this.newTodo = { todo: '', status: false };
      this.getTodos();
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  async deleteTodo(id: number) {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
    });

    if (result.isConfirmed) {
      try {
        const { error } = await this.supabaseService.deleteTodo(id);
        if (error) {
          this.errorMessage = error.message;
        }
        this.getTodos();
      } catch (error: any) {
        this.errorMessage = error.message;
      }
    }
    return;
  }

  async editTodo(id: number) {
    try {
      this.editID = id;
      const { data, error } = await this.supabaseService.getTodoById(id);

      if (error) {
        this.errorMessage = error.message;
        return;
      }

      this.editNewTodo = {
        editTodo: data.todo,
        editStatus: data.status,
      };

      this.reverseValue = !data.status;
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  public cancel() {
    this.editID = 0;
    this.editNewTodo = { editTodo: '', editStatus: false };
    return;
  }

  async updateTodo() {
    try {
      const { data, error } = await this.supabaseService.updateTodo(
        this.editID,
        { todo: this.editNewTodo.editTodo, status: this.editNewTodo.editStatus }
      );

      if (error) {
        this.errorMessage = error.message;
        return;
      }
      this.editID = 0;
      this.editNewTodo = { editTodo: '', editStatus: false };
      this.getTodos();
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  async toggleTodo(id: number) {
    try {
      const { data, error } = await this.supabaseService.toggleStatus(id);
      this.getTodos();
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}

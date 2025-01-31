import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupabaseServiceService } from '../../services/supabase-service.service';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  constructor(private supabaseService: SupabaseServiceService) {}

  searchTerm: string = '';
  todos: any[] = [];
  errorMessage: string = '';

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
}

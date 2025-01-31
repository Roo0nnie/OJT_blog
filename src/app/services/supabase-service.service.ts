import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseServiceService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.apiUrl, environment.apiKey);
  }

  async getTodo(searchTerm: string = '') {
    let query = this.supabase.from('todos').select('*');

    if (searchTerm) {
      query = query.ilike('todo', `%${searchTerm}%`);
    }

    return await query.order('created_at', { ascending: false });
  }

  async addTodo(todo: { todo: string; status: boolean }) {
    const { data, error } = await this.supabase
      .from('todos')
      .insert([{ ...todo }]);
    return { data, error };
  }

  async deleteTodo(id: number) {
    const { data, error } = await this.supabase
      .from('todos')
      .delete()
      .eq('id', id);

    return { data, error };
  }

  async getTodoById(id: number) {
    const { data, error } = await this.supabase
      .from('todos')
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  }

  async updateTodo(id: number, editNewTodo: { todo: string; status: boolean }) {
    const { data, error } = await this.supabase
      .from('todos')
      .update({ ...editNewTodo })
      .eq('id', id);
    return { data, error };
  }

  async toggleStatus(id: number) {
    try {
      const { data: todo, error: fetchError } = await this.supabase
        .from('todos')
        .select('status')
        .eq('id', id)
        .single();

      if (fetchError) {
        throw new Error(fetchError.message);
      }

      const { data, error } = await this.supabase
        .from('todos')
        .update({ status: !todo.status })
        .eq('id', id);

      if (error) {
        throw new Error(error.message);
      }

      return { data, error };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

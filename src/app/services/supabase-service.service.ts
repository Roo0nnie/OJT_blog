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

    return await query.order('id', { ascending: true });
  }
}

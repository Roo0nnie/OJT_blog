import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseAnonKey
    );
  }

  async getProducts(searchTerm: string = '') {
    let query = this.supabase.from('products').select('*');
    if (searchTerm) {
      query = query.ilike('product', `%${searchTerm}%`);
    }
    return query;
  }

  async createProduct(product: {
    product: string;
    price: number;
    description: string;
  }) {
    return this.supabase.from('products').insert([product]);
  }

  async updateProduct(
    id: string,
    product: { product?: string; price?: number; description?: string }
  ) {
    return this.supabase.from('products').update(product).eq('id', id);
  }

  async deleteProduct(id: string) {
    return this.supabase.from('products').delete().eq('id', id);
  }
}

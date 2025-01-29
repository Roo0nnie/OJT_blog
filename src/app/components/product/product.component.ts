import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';
  newProduct = { product: '', price: 0, description: '' };

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit() {
    this.getProducts();
  }

  async getProducts() {
    const { data, error } = await this.supabaseService.getProducts(
      this.searchTerm
    );
    if (error) {
      console.error('Error fetching products:', error);
    } else {
      this.products = data ?? [];
    }
  }

  async addProduct() {
    if (!this.newProduct.product || !this.newProduct.price) return;
    const { error } = await this.supabaseService.createProduct(this.newProduct);
    if (error) {
      console.error('Error adding product:', error);
    } else {
      this.newProduct = { product: '', price: 0, description: '' };
      this.getProducts();
    }
  }

  async updateProduct(product: any) {
    const updatedProduct = { ...product, price: product.price + 1 };
    const { error } = await this.supabaseService.updateProduct(
      product.id,
      updatedProduct
    );
    if (error) {
      console.error('Error updating product:', error);
    } else {
      this.getProducts();
    }
  }

  async deleteProduct(id: string) {
    const { error } = await this.supabaseService.deleteProduct(id);
    if (error) {
      console.error('Error deleting product:', error);
    } else {
      this.getProducts();
    }
  }
}

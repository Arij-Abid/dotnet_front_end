import { Component } from '@angular/core';
import { AddCategoryRequest } from '../../models/add-category-request';
import { CategoryService } from '../services/category.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  model:AddCategoryRequest;
  //
  constructor(private categoryService: CategoryService){
    this.model = {
      name: '',
      urlHandle: ''
    };
  }
  onFormSubmit() {
    this.categoryService.addCategory(this.model).subscribe({
      next: (response) => {
        console.log('Category added successfully');
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 0) {
          console.error('API might be down or connection refused');
        } else {
          console.error(`Error ${err.status}: ${err.message}`);
        }
      }
    });
  }
  
  
}

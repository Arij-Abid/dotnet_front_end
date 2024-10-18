import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../../models/add-category-request';
import { Category } from '../../models/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  //inject HttpClient
  constructor(private http: HttpClient) {}
//type de return Observable => rxjs 
  addCategory(model: AddCategoryRequest): Observable<void> {
    //communicate with external API  of dotnet

      return this.http.post<void>(`${environment.apiBaseUrl}/api/Categories`, model);
  }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/Categories`);
  }

  //collection []
}


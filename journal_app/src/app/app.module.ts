import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './core/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    CategoryListComponent,
    EditCategoryComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

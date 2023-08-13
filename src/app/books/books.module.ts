import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ]
})
export class BooksModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from '../books/list/list.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        LoginComponent, ListComponent
    ],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, AuthRoutingModule,
        SharedModule
    ]
})
export class AuthModule { }

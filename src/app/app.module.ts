import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/pages/students/students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import {AppRoutingModule} from "./app-routing.module";
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {StudentsService} from "./students/services/students.service";
import {SignInService} from "./security/services/sign-in.service";

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    AboutComponent,
    SignInComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule,
    RouterTestingModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatListModule,
    //nuestras importaciones para el comp de angular principal
  ],
  //colocar todos los services
  providers: [StudentsService, SignInService],
  bootstrap: [AppComponent]
})
export class AppModule { }

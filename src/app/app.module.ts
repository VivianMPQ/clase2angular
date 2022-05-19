import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/pages/students/students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    AboutComponent
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
    HttpClientModule //nuestras importaciones para el comp de angular principal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

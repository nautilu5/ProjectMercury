import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { AboutComponent } from './component/about/about.component';
import { DebugComponent } from './component/debug/debug.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { CommonModule } from '@angular/common/src/common_module';

const appRoutes: Routes = [
  { path: 'app-home', component: HomeComponent },
  { path: 'app-about', component: AboutComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    AboutComponent,
    DebugComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { BrowserModule } from '@angular/platform-browser'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

const routes: Routes = [
  { path: 'movieviewer', loadChildren: './movieviewer/movieviewer.module#MovieviewerModule' },
  { path: '**', redirectTo:'movieviewer'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
   // FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

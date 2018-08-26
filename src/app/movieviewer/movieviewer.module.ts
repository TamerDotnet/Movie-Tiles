/// <reference path="components/maincontent/maincontent.component.ts" />
/// <reference path="components/maincontent/maincontent.component.ts" />
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MoviewviewerAppComponent } from './moviewviewer-app/moviewviewer-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MovieService } from 'src/app/movieviewer/services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { TileBackComponent } from './components/tile-back/tile-back.component';

const routes: Routes = [
  {
    path: '', component: MoviewviewerAppComponent,
    children: [
      { path: ':id', component: MaincontentComponent },
      { path: '', component: MaincontentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    MovieService
  ],
  declarations: [MoviewviewerAppComponent, ToolbarComponent, MaincontentComponent, TileBackComponent]
})
export class MovieviewerModule { }

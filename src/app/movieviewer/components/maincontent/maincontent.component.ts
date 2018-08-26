import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/movieviewer/models/movie';
import { MovieService } from 'src/app/movieviewer/services/movie.service';
import { trigger } from '@angular/animations';
import { style } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { animate } from '@angular/animations';
import { ElementRef } from '@angular/core';
import { AfterContentInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TileBackComponent } from 'src/app/movieviewer/components/tile-back/tile-back.component';
import { movieDetails } from 'src/app/movieviewer/models/movieDetails';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class MaincontentComponent implements OnInit, AfterContentInit {
  movies: Observable<Movie[]>;
  @Output() click = new EventEmitter();
  @ViewChild(TileBackComponent) selectedMovieComponent: TileBackComponent;
  public selectedMovie: movieDetails;
 // @ViewChild('divMovieCard') divMovieCard: ElementRef;

  flip: string = 'inactive';
  constructor(private movieService: MovieService, private elRef: ElementRef, private divMovieCard: ElementRef ) { }

  ngOnInit() {
    this.movies = this.movieService.movies;
    console.log('before start do the data loading');
    this.movieService.LoadData();
    this.movies.subscribe(data => {
      //console.log(data);
    });
  }

  ngAfterViewInit() {
  
  }
  ngAfterContentInit() {
  
  }

  toggleState(movie: Movie) {
    console.log('Current state:' + movie.state);
    movie.state = movie.state === 'active' ? 'inactive' : 'active';
    if (movie.state == 'active') {
      this.selectedMovieComponent.loading = true;
       this.movieService.getMovieById(movie.ID).subscribe(movie => {
         this.selectedMovieComponent.currentMovie = movie;
         this.selectedMovie = movie;
         this.selectedMovieComponent.loading = false;
         console.log( this.selectedMovieComponent.currentMovie );
      });
    }
  }

  }

 

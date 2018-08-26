import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; 
import { movieDetails } from 'src/app/movieviewer/models/movieDetails';

@Component({
  selector: 'tile-back',
  templateUrl: './tile-back.component.html',
  styleUrls: ['./tile-back.component.css']
})
export class TileBackComponent implements OnInit {
  @Input() currentMovie: movieDetails;
  @Input() loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.currentMovie == null) {
     // this.currentMovie == new movieDetails();
    }
  }

}

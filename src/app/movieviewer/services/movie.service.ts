import { Injectable } from '@angular/core';
import { Movie } from 'src/app/movieviewer/models/movie';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { last } from 'rxjs/internal/operators/last';
import { movieDetails } from 'src/app/movieviewer/models/movieDetails';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private cinemaworldUrl: string = 'http://webjetapitest.azurewebsites.net/api/cinemaworld/movies';
  private filmworldUrl: string = 'http://webjetapitest.azurewebsites.net/api/filmworldworld/movies';

  private cinemaworldDetailsUrl: string = 'http://webjetapitest.azurewebsites.net/api/cinemaworld/movie';
  private filmworldworldDetailsUrl: string = 'http://webjetapitest.azurewebsites.net/api/filmworldworld/movie';

  private _movies: BehaviorSubject<Movie[]> 

  private dataStore: {
    movies: Movie[];
  }
 
  private cachedMovies: movieDetails[] = [];

  constructor(private http: HttpClient) {
    this.dataStore = { movies: [] }; 
    this._movies = new BehaviorSubject<Movie[]>([]);
  
  }

  get movies(): Observable<Movie[]> {
    return this._movies.asObservable();
  }
 

  LoadData() { 
     this.cinemaworldUrl = './assets/json/cinemaworld.json';
      const httpOptions = {
      headers: new HttpHeaders({
        'Content': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', 
        'x-access-token': 'sjd1HfkjU83ksdsm3802k',
        'Authorization': 'sjd1HfkjU83ksdsm3802k',
        'Access-Control-Allow-Origin': 'http://webjetapitest.azurewebsites.net',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Expose-Headers':'*',
       // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      })
    };

    return this.http.get<Movie[]>(this.cinemaworldUrl, { headers: httpOptions.headers })
      .subscribe(data => {
        this.dataStore.movies = data.map(x => new Movie(x.Title, x.Year, x.ID, x.Type, x.Poster));
        this._movies.next(Object.assign({}, this.dataStore).movies);
      }, error => {
        console.log("Failed to fetch movies");
      });
  }
 
 getMovieById(id: string): Observable<movieDetails> {
    if (id === '') {
      return of(this.initializeMovie());
    }

    //check if Movie Cached Before
    if (this.cachedMovies) {
      const foundItem = this.cachedMovies.find(item => item.ID === id);
      if (foundItem) {
        return of(foundItem);
      }
    }
    console.log('call database'); 
    const url = this.cinemaworldDetailsUrl + '/' + id;
       
    return this.http.get<movieDetails>(url)
      .pipe(
      tap(data => {
        console.log(data);
          this.cachedMovies[this.cachedMovies.length] = data;
          }),
      tap(data => console.log('Finished Calling')),
      last(),
      catchError(this.handleError<movieDetails>('getMovie'))
      );
  }
    private initializeMovie(): movieDetails {
    // Return an initialized object
    return new movieDetails();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

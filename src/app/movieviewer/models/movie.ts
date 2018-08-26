export class Movie {
  Title: string;
  Year: string;
  ID: string;
  Type: string;
  Poster: string;
  public state = 'inactive';
  constructor(title: string, year: string, id: string, type: string, poster: string) {
    this.ID = id;
    this.Title = title;
    this.Year = year;
    this.Type = type;
    this.Poster = poster;
    this.state = 'inactive'; 
  }
}

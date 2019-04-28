import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';

export interface IMovieData {
  page: number;
  total_results: number;
  total_pages: number;
  results: Array<IMovie>;
}

export interface IMovie {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: Array<number>;
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: any;
}

export interface IProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ILanguage {
  iso_639_1: string;
  name: string;
}

export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: Array<IGenre>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<IProductionCompany>;
  production_countries: Array<IProductionCountry>;
  release_date: any;
  revenue: number;
  runtime: number;
  spoken_languages: Array<ILanguage>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGenreData {
  genres: Array<IGenre>;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface ICredits {
  id: number;
  cast: Array<IActor>;
}

export interface IActor {
  cast_id: number;
  character: string;
  credit_id: number;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  private static handleError(error: Error | any): Observable<any> {
    return throwError(error);
  }

  public getGenre(id: number): string {
    switch (id) {
      case 28:
        return 'Action';
      case 12:
        return 'Adventure';
      case 16:
        return 'Animation';
      case 35:
        return 'Comedy';
      case 80:
        return 'Crime';
      case 99:
        return 'Documentary';
      case 18:
        return 'Drama';
      case 10751:
        return 'Family';
      case 14:
        return 'Fantasy';
      case 36:
        return 'History';
      case 27:
        return 'Horror';
      case 10402:
        return 'Music';
      case 9648:
        return 'Mystery';
      case 10749:
        return 'Romance';
      case 878:
        return 'Science Fiction';
      case 10770:
        return 'TV Movie';
      case 53:
        return 'Thriller';
      case 10752:
        return 'War';
      case 37:
        return 'Western';
    }
  }

  getMovies(page: number): Observable<IMovieData> {
    return this.http.get(`${environment.baseUrlDiscover}?api_key=${environment.apiKey}&page=${page}`)
                    .pipe(catchError(MovieService.handleError));
  }

  getMoviesForGenre(id: number): Observable<IMovieData> {
    return this.http.get(`${environment.baseUrlGenre}${id}/movies?api_key=${environment.apiKey}`)
                    .pipe(catchError(MovieService.handleError));
  }

  getMoviesForSearchCriteria(criteria: string): Observable<IMovieData> {
    return this.http.get(`${environment.baseUrlSearch}?api_key=${environment.apiKey}&query=${criteria}`)
                    .pipe(catchError(MovieService.handleError));
  }

  getMovieById(id: number): Observable<IMovieDetails> {
    return this.http.get(`${environment.baseUrlById}${id}?api_key=${environment.apiKey}`)
                    .pipe(catchError(MovieService.handleError));
  }

  getAllGenres(): Observable<IGenreData> {
    return this.http.get(`${environment.baseUrlGenre}movie/list?api_key=${environment.apiKey}`)
                    .pipe(catchError(MovieService.handleError));
  }

  getActorsForMovie(id: number): Observable<ICredits> {
    return this.http.get(`${environment.baseUrlById}${id}/credits?api_key=${environment.apiKey}`)
                    .pipe(catchError(MovieService.handleError));
  }
}

import { Component, OnInit } from '@angular/core';
import {IMovie, IMovieData, MovieService} from '../shared/movie-service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  movieData: IMovieData;
  movies: Array<IMovie>;
  totalPages: number;
  activePage: number;
  shownPages: Array<number> = [];
  isLoading: false;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.activePage = 1;

    for (let i = 1; i <= 5; i++) {
      this.shownPages.push(i);
    }

    this.getMoviesForPage();
  }

  goToPage(page: number) {
    this.activePage = page;
    page = page - 2;

    if (page <= 0) {
      page = 1;
    }

    for (let i = 0; i < 5; i++) {
      this.shownPages[i] = page;
      page++;
    }

    this.getMoviesForPage();
  }

  goForward() {
    if (this.activePage < this.totalPages) {
      this.activePage++;
      let page = this.activePage;
      page = page - 2;

      if (page === 0) {
        page++;
      }

      for (let i = 0; i < 5; i++) {
        this.shownPages[i] = page;
        page++;
      }

      this.getMoviesForPage();
    }
  }

  goBackwards() {
    if (this.activePage > 1) {
      this.activePage--;
      let page = this.activePage;
      page = page - 2;

      if (page <= 0) {
        page = 1;
      }

      for (let i = 0; i < 5; i++) {
        this.shownPages[i] = page;
        page++;
      }

      this.getMoviesForPage();
    }
  }

  getMoviesForPage() {
    this.movieService.getMovies(this.activePage).subscribe(data => {
      this.movieData = data;
      this.movies = data.results;
      this.totalPages = this.movieData.total_pages;
    });
  }
}

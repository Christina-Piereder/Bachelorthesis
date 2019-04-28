import {Component, Input, OnInit} from '@angular/core';
import {IMovie, MovieService} from '../shared/movie-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  movies: Array<IMovie> = [];

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => this.movieService.getMoviesForSearchCriteria(p['searchCriteria'])
                     .subscribe(data =>  {
                       this.movies = data.results;
                     }));
  }

}

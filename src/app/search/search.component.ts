import { Component, OnInit } from '@angular/core';
import {IMovie, MovieService} from '../shared/movie-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {}

  searchMovies(searchCriteria: string) {
    this.router.navigate(['./search/', searchCriteria]);
  }
}

import {Component, OnInit} from '@angular/core';
import {IActor, IMovieDetails, MovieService} from '../shared/movie-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  baseUrl = 'https://image.tmdb.org/t/p/w500/';
  movie: IMovieDetails = null;
  actors: Array<IActor> = [];

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => this.movieService.getMovieById(p['id'])
                     .subscribe(movie => {
                       this.movie = movie;
                       this.movieService.getActorsForMovie(p['id']).subscribe(credits => {
                         this.actors = credits.cast.slice(0, 8);
                       });
                     }));
  }

}

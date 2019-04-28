import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../shared/movie-service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  baseUrl = 'https://image.tmdb.org/t/p/w300';

  @Input()
  movie: IMovie;

  constructor() {}
}

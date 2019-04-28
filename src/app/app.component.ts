import {Component, OnInit} from '@angular/core';
import {IGenre, MovieService} from './shared/movie-service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movie';
  genres: Array<IGenre>;
  languages: Array<string>;
  date = new FormControl(new Date());
  currentDate = new Date();

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getAllGenres().subscribe(data => this.genres = data.genres);

    this.languages = ['German', 'English', 'Danish', 'French', 'Spanisch', 'Italian', 'Japanese',
                      'Chinese', 'Korean', 'Dutch', 'Norwegian', 'Polish', 'Portuguese', 'Russian',
                      'Turkish'];
  }


}

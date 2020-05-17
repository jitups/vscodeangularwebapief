import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieModel } from 'src/app/models/movie-model';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  checkoutForm: FormGroup;
  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    this.checkoutForm = new FormGroup({ 'name': new FormControl(null,Validators.required) });
  }

  onSubmit(movieData: MovieModel) {
    console.log('movieData', movieData);
    this.movieService.addMovie(movieData).subscribe(movie => {
      console.log('Added movie: ', movie);
      this.movieService.movieRefresh.next(true);
    });
    this.checkoutForm.reset()
  }
}

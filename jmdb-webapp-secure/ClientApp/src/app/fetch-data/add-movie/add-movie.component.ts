import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieModel } from 'src/app/models/movie-model';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit, OnDestroy {
  checkoutForm: FormGroup;
  subsriptions: Subscription[] = [];

  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    this.clearForm();
    this.subsriptions.push(this.movieService.movieSelected$.subscribe(movie => {
      if (movie) {
        this.checkoutForm.patchValue({
          id: movie.id,
          name: movie.name,
          rating: movie.rating,
          description: movie.description
        });
      }
    }));
  }

  onSubmit(movieData: MovieModel) {
    console.log('movieData', movieData);
    if (movieData.id === 0) {
      this.subsriptions.push(this.movieService.addMovie(movieData).subscribe(movie => {
        console.log('Added movie: ', movie);
        this.movieService.movieListUpdated$.next(true);
      }));
    }
    else {
      this.subsriptions.push(this.movieService.updateMovie(movieData).subscribe(movie => {
        console.log('updated movie: ', movie);
        this.movieService.movieListUpdated$.next(true);
      }));
    }

    this.clearForm();
  }

  clearForm() {
    this.checkoutForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(null, Validators.required),
      rating: new FormControl(3, Validators.required),
      description: new FormControl(null, Validators.required),
    });

  }

  ngOnDestroy() {
    this.subsriptions.forEach(subscription =>
      subscription.unsubscribe()
    );

  }
}

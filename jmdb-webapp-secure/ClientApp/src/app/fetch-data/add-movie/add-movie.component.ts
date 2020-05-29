import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieModel } from 'src/app/models/movie-model';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { Subscription } from 'rxjs';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit, OnDestroy {
  checkoutForm: FormGroup;
  subsriptions: Subscription[];

  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    this.checkoutForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(null, Validators.required)
    });
    this.subsriptions.push(this.movieService.movieSelected$.subscribe(movie => {
      if (movie) {
        this.checkoutForm.patchValue({
          id: movie.id,
          name: movie.name
        });
      }
    }));
  }

  
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
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

    this.checkoutForm.reset()
  }

  ngOnDestroy() {
    this.subsriptions.forEach(subscription =>
      subscription.unsubscribe()
    );

  }
}

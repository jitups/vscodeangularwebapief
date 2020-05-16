import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public movies:Array<any>=[];

  constructor(http: HttpClient,
    private movieService:MovieServiceService
    ) {
   }

  ngOnInit(){
    this.movieService.getMovies().subscribe(movies=>{
      this.movies=movies;
    });
  }
}

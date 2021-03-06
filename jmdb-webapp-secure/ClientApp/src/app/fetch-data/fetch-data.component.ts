import { Component, Inject, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieServiceService } from '../services/movie-service.service';
import { Subscription } from 'rxjs';
import { MovieModel } from '../models/movie-model';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit, OnDestroy {
  public movies: Array<MovieModel> = [];
  private subscriptions: Array<Subscription> = [];
  public displayedColumns: string[] = ['Id', 'Name'];

  constructor(http: HttpClient,
    private movieService: MovieServiceService
  ) {

  }

  ngOnInit() {
    this.getMovies();
    this.subscriptions.push(this.movieService.movieListUpdated$.subscribe(isRefresh => {
      if (isRefresh) {
        this.getMovies()
      }
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getMovies() {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

  displayRow(movie: MovieModel) {
    this.movieService.movieSelected$.next(movie);
  }

  onCellClick(e: any) {
    console.log('data item: ', e.dataItem);
    this.displayRow(e.dataItem as MovieModel);
  }
}

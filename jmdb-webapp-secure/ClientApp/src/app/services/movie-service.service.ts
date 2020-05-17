import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { MovieModel } from '../models/movie-model';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private webApiControllerName='Movie';
  public movieRefresh = new BehaviorSubject<boolean>(null);

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<any>{
    return this.httpClient.get(environment.api_endpoint + this.webApiControllerName);
  }

  addMovie(movie:MovieModel):Observable<MovieModel>{
    return this.httpClient.post<MovieModel>(environment.api_endpoint + this.webApiControllerName,movie);
  }
}

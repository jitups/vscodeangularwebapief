import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private webApiControllerName='Movie';

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<any>{
    return this.httpClient.get(environment.api_endpoint + this.webApiControllerName);
  }
}

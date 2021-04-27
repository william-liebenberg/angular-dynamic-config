import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from './app-config';

@Injectable({
  providedIn: 'root',
})
export class ApplicationConfigService {
  private configURL = '/assets/config.json';

  // assign default values - unless you want to see a lot of 'undefined' errors in your log console.
  config: AppConfig = {
    backendUrl: '',
    themeCssUrl: ''
  };

  isLoaded!: boolean;

  constructor(private http: HttpClient) { }

  load() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      responseType: 'json'
    } as const;

    // load JSON via HttpClient
    return this.http.get<AppConfig>(this.configURL, httpOptions)
      .toPromise()
      .then(response => {
        this.config = {...response};
        this.isLoaded = true;
      })
      .catch(err => {
        this.isLoaded = false;
      });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from './app-config';

@Injectable({
  providedIn: 'root',
})
export class ApplicationConfigService {
  private configURL = '/assets/config.json';

  config: AppConfig;

  constructor(private http: HttpClient) {
    // assign default values
    this.config = {
      backendUrl: '',
      themeCssUrl: '',
    };
  }

  load() {
    try {
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }),
        responseType: 'json'
      } as const;

      // load JSON via HttpClient
      this.http.get<AppConfig>(this.configURL, httpOptions)
        .toPromise()
        .then(response => {
          this.config.backendUrl = response.backendUrl;
          this.config.themeCssUrl = response.themeCssUrl;
        });

    } catch {
      alert('Please check that the config.json file is present!');
    }
  }
}

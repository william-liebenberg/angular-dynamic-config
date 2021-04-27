import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from './app-config';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationConfigService {
  private configURL = '/assets/config.json';

  // assign default values - unless you want to see a lot of 'undefined' errors in your log console.
  private config: AppConfig = {
    backendUrl: '',
    themeCssUrl: ''
  };

  private configSubject$: BehaviorSubject<AppConfig>;

  getConfig(): Observable<AppConfig> {
    return this.configSubject$.asObservable();
  }

  isLoaded!: boolean;

  constructor(private http: HttpClient) {
    this.configSubject$ = new BehaviorSubject<AppConfig>(this.config);
  }

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
      .then(config => {
        this.config = config;
        this.configSubject$.next(this.config);
        this.isLoaded = true;
      })
      .catch((err: any) => {
        console.log(err);
        this.isLoaded = false;
      });
  }
}

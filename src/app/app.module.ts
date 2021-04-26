import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApplicationConfigService } from './applicationconfig.service';
import { ShowConfigComponent } from './show-config/show-config.component';

const configInitializer = (appConfig: ApplicationConfigService) => {
  return () => {
    return appConfig.load();
  };
};

@NgModule({
  declarations: [AppComponent, ShowConfigComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    ApplicationConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configInitializer,
      multi: true,
      deps: [ApplicationConfigService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

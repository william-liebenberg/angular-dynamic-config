import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../app-config';
import { ApplicationConfigService } from '../applicationconfig.service';

@Component({
  selector: 'app-show-config',
  templateUrl: './show-config.component.html',
  styleUrls: ['./show-config.component.scss'],
})
export class ShowConfigComponent implements OnInit {
  constructor(public configService: ApplicationConfigService) {
    this.applicationConfig = configService.config;
  }

  applicationConfig: AppConfig;
  ngOnInit(): void {}
}

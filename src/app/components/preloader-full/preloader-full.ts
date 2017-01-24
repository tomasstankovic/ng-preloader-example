import { Component } from '@angular/core';
import { PreloaderService } from '../../services/preloader-service';

@Component({
  selector: 'preloader-full',
  styleUrls: [
    './preloader-full.scss'
  ],
  templateUrl: './preloader-full.html'
})
export class PreloaderFull {
  constructor(public preloaderService: PreloaderService) {
  }
}

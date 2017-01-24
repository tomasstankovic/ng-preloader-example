import { Component } from '@angular/core';
import { PreloaderService } from '../../services/preloader-service';

@Component({
  selector: 'preloader-small',
  styleUrls: [
    './preloader-small.scss'
  ],
  templateUrl: './preloader-small.html'
})
export class PreloaderSmall {
  constructor(public preloaderService: PreloaderService) {
  }
}

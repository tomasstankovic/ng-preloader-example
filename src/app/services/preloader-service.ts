import { Injectable } from '@angular/core';

@Injectable()
export class PreloaderService {
  public static fullLoadingCount: number = 0;
  public static smallLoadingCount: number = 0;

  getPreloaderCount(preloaderType = 'full'): number {
    if (preloaderType === 'full') {
      return PreloaderService.fullLoadingCount;
    } else if (preloaderType === 'small') {
      return PreloaderService.smallLoadingCount;
    }
  }

  showPreloader(preloaderType = 'full'): void {
    if (preloaderType === 'full') {
      PreloaderService.fullLoadingCount++;
    } else if (preloaderType === 'small') {
      PreloaderService.smallLoadingCount++;
    }
  }

  hidePreloader(preloaderType = 'full'): void {
    if (preloaderType === 'full') {
      PreloaderService.fullLoadingCount--;
    } else if (preloaderType === 'small') {
      PreloaderService.smallLoadingCount--;
    }
  }
}

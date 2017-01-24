import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { routing } from './app.routing';
import { HttpService } from './services/http-service';
import { PreloaderService } from './services/preloader-service';
import { PostService } from './services/post-service';
import { PreloaderFull } from './components/preloader-full/preloader-full';
import { PreloaderSmall } from './components/preloader-small/preloader-small';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


export function httpServiceFactory(backend: XHRBackend, defaultOptions: RequestOptions, preloaderService: PreloaderService) {
  return new HttpService(backend, defaultOptions, preloaderService);
}

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PreloaderFull,
    PreloaderSmall
  ],
  bootstrap: [AppComponent],
  providers: [
    PreloaderService,
    PostService,
    {
      provide: HttpService,
      useFactory: httpServiceFactory,
      deps: [XHRBackend, RequestOptions, PreloaderService]
    }]
})
export class AppModule {
}

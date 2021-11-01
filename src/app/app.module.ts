import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { HoverCssThoughComponentComponent } from './hover-css-though-component/hover-css-though-component.component';
import { InsideCssCompComponent } from './inside-css-comp/inside-css-comp.component';
import { ScrollComponentComponent } from './scroll-component/scroll-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    HoverCssThoughComponentComponent,
    InsideCssCompComponent,
    ScrollComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

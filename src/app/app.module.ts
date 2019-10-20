import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddMrPipe } from './app.pipe';
import { HighlightDirective } from './highlight.directive';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMrPipe,
    HighlightDirective,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    ChildComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

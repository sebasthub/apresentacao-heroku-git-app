import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviBarComponent } from './components/navi-bar/navi-bar.component';
import { ContentComponent } from './components/content/content.component';
import { GitApresentationComponent } from './components/git-apresentation/git-apresentation.component';
import { OQueAprendiComponent } from './components/o-que-aprendi/o-que-aprendi.component';
import { HerokuApresentacaoComponent } from './components/heroku-apresentacao/heroku-apresentacao.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviBarComponent,
    ContentComponent,
    GitApresentationComponent,
    OQueAprendiComponent,
    HerokuApresentacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

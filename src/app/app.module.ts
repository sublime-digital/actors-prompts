import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromptsComponent } from './prompts/prompts.component';
import { LinksComponent } from './links/links.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { BookclubComponent } from './bookclub/bookclub.component';

@NgModule({
  declarations: [
    AppComponent,
    PromptsComponent,
    LinksComponent,
    ShowcaseComponent,
    BookclubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptsComponent } from './prompts/prompts.component';
import { LinksComponent } from './links/links.component';
import { ShowcaseComponent } from './showcase/showcase.component';

const routes: Routes = [
  { path: '',   redirectTo: 'prompts', pathMatch: 'full' },
  { path: 'prompts', component: PromptsComponent },
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'views', component: LinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

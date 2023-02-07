import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GitComponent } from './git/git.component';
import { TindexComponent } from './tindex/tindex.component';

const routes: Routes = [
  {path:"tindex", component: TindexComponent},
  {path:"git", component: GitComponent},
  {path:"about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

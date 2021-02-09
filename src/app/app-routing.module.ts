import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { ReportComponent } from './report/report.component';
import { GamesComponent } from './games/games.component';
import { LessonsComponent } from './lessons/lessons.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'report', component: ReportComponent },
  { path: 'games', component: GamesComponent },
  { path: 'lessons/:topic/:course', component: LessonsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// Modules -------------------------------------------------------------------
// Main angular components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



// Angular Material Modules
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatFormFieldModule} from '@angular/material/form-field';


// Third Party Modules
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ChartsModule } from 'ng2-charts';
import { MatCarouselModule } from '@ngbmodule/material-carousel';


// Routing Modules
import { AppRoutingModule } from './app-routing.module';

// -------------------------------------------------------------------

// Components
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { ReportComponent } from './report/report.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EnglishReportComponent } from './english-report/english-report.component';
import { MathReportComponent } from './math-report/math-report.component';
import { SpanishReportComponent } from './spanish-report/spanish-report.component';
import { GeneralReportComponent } from './general-report/general-report.component';
import { GamesComponent } from './games/games.component';
import { MatTreeModule } from '@angular/material/tree';
import { AssignmentLibraryComponent } from './assignment-library/assignment-library.component';
import { DialogImgComponent } from './dialog-img/dialog-img.component';
import { LessonsComponent } from './lessons/lessons.component';
import { EnglishLessonsComponent } from './english-lessons/english-lessons.component';
import { SpanishLessonsComponent } from './spanish-lessons/spanish-lessons.component';
import { MathLessonsComponent } from './math-lessons/math-lessons.component';

// -------------------------------------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ActivitiesComponent,
    HomeComponent,
    LibraryComponent,
    ReportComponent,
    NavbarComponent,
    EnglishReportComponent,
    MathReportComponent,
    SpanishReportComponent,
    GeneralReportComponent,
    GamesComponent,
    AssignmentLibraryComponent,
    DialogImgComponent,
    LessonsComponent,
    EnglishLessonsComponent,
    SpanishLessonsComponent,
    MathLessonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScullyLibModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    LayoutModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule,
    ChartsModule,
    CdkTreeModule,
    MatTreeModule,
    MatCarouselModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

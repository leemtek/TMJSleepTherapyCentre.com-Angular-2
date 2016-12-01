import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { RouterModule } from '@angular/router';
import { AppComponents, AppRoutes } from "./app.routes";

import { HeaderComponent } from "./common/header.component";
import { FooterComponent } from "./common/footer.component";

// Pages
import { AppComponent } from './app.component';
import { HomeComponent } from "./pages/home.component";
import { MeetDrComponent } from "./pages/meet-dr.component";

// Pages: Services
import { TmjComponent } from "./pages/services/tmj.component";
import { TmjTreatmentChildrenComponent } from "./pages/services/tmj-treatment-children.component";
import { SleepDisordersComponent } from "./pages/services/sleep-disorders.component";
import { SleepDisordersChildrenComponent } from "./pages/services/sleep-disorders-children.component";
import { CraniofacialComponent } from "./pages/services/craniofacial.component";
import { FacialPainComponent } from "./pages/services/facial-pain.component";
import { NeckJawComponent } from "./pages/services/neck-jaw.component";
import { OrthodonticsComponent } from "./pages/services/orthodontics.component";

// Pages: Education
import { TmjSymptomsComponent } from "./pages/education/tmj-symptoms.component";
import { SleepApneaComponent } from "./pages/education/sleep-apnea.component";

@NgModule({
  declarations: [
    // Used throughout the project.
    HeaderComponent, FooterComponent,

    // Pages
    AppComponent,
    HomeComponent,
    MeetDrComponent,

    // Services
    TmjComponent,
    TmjTreatmentChildrenComponent,
    SleepDisordersComponent,
    SleepDisordersChildrenComponent,
    CraniofacialComponent,
    FacialPainComponent,
    NeckJawComponent,
    OrthodonticsComponent,

    // Education
    TmjSymptomsComponent,
    SleepApneaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule, RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

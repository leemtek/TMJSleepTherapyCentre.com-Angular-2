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
import { TestimonialsComponent } from "./pages/testimonials.component";
import { LocationsComponent } from "./pages/locations.component";
import { ReferralFormComponent } from "./pages/referral-form.component";
import { ContactComponent } from "./pages/contact.component";
import { NewPatientsComponent } from "./pages/new-patients.component";

// Forms
import { OnlineReferralComponent } from "./forms/online-referral.component";
import { AppointmentComponent } from "./forms/appointment.component";

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
    TestimonialsComponent,
    LocationsComponent,
    ReferralFormComponent,
    ContactComponent,
    NewPatientsComponent,

    // Forms
    OnlineReferralComponent,
    AppointmentComponent,

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

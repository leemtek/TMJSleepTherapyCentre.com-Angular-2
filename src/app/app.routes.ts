// Main Pages
import { HomeComponent } from "./pages/home.component";
import { MeetDrComponent } from "./pages/meet-dr.component";
import { TestimonialsComponent } from "./pages/testimonials.component";
import { LocationsComponent } from "./pages/locations.component";
import { ReferralFormComponent } from "./pages/referral-form.component";
import { ContactComponent } from "./pages/contact.component";
import { NewPatientsComponent } from "./pages/new-patients.component";

// Forms
import { OnlineReferralComponent } from "./forms/online-referral/online-referral.component";
import { AppointmentComponent } from "./forms/appointment/appointment.component";
import { ThankYouComponent } from "./forms/thank-you.component";

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

export const AppRoutes: any = [
    // Homepage
    { path: "", component: HomeComponent },
    { path: "meet-dr", component: MeetDrComponent },
    { path: "testimonials", component: TestimonialsComponent },
    { path: "locations", component: LocationsComponent },
    { path: "referral-form", component: ReferralFormComponent },
    { path: "contact", component: ContactComponent },
    { path: "new-patients", component: NewPatientsComponent },

    // Forms
    { path: "online-referral", component: OnlineReferralComponent },
    { path: "appointment", component: AppointmentComponent },
    { path: "thank-you", component: ThankYouComponent },

    // Services
    { path: "tmj", component: TmjComponent },
    { path: "tmj-treatment-children", component: TmjTreatmentChildrenComponent },
    { path: "sleep-disorders", component: SleepDisordersComponent },
    { path: "sleep-disorders-children", component: SleepDisordersChildrenComponent },
    { path: "craniofacial", component: CraniofacialComponent },
    { path: "facial-pain", component: FacialPainComponent },
    { path: "neck-jaw", component: NeckJawComponent },
    { path: "orthodontics", component: OrthodonticsComponent },

    // Education
    { path: "tmj-symptoms", component: TmjSymptomsComponent },
    { path: "sleep-apnea", component: SleepApneaComponent }
];
 
export const AppComponents: any = [];
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
import { MeetDrRSVPComponent } from "./forms/rsvp/meet-dr-rsvp.component";
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
import { ErrorNotFoundComponent } from "./pages/error-not-found.component";

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
    { path: "rsvp", component: MeetDrRSVPComponent },
    { path: "thank-you", component: ThankYouComponent },

    // Services
    { path: "tmj", component: TmjComponent },
    { path: "tmj-treatment-children", component: TmjTreatmentChildrenComponent },
    { path: "sleep-disorders", component: SleepDisordersComponent },
    { path: "sleep-disorders-children", component: SleepDisordersChildrenComponent },
    { path: "craniofacial", component: CraniofacialComponent },
    { path: "facial-pain", component: FacialPainComponent },
    { path: "neck-jaw", component: NeckJawComponent },

    // Orthodontics
    { path: "orthodontics", component: OrthodonticsComponent },

    // Education
    { path: "tmj-symptoms", component: TmjSymptomsComponent },
    { path: "sleep-apnea", component: SleepApneaComponent },

    // Legacy URLs routed to their appropriate route.
    { path: "meet-dr.php", redirectTo: "/meet-dr" },
    { path: "craniofacial.php", redirectTo: "/craniofacial" },
    { path: "orthodontics.php", redirectTo: "/orthodontics" },
    { path: "appointment.php", redirectTo: "/appointment" },
    { path: "tmj.php", redirectTo: "/tmj" },
    { path: "testimonials.php", redirectTo: "/testimonials" },
    { path: "contact.php", redirectTo: "/contact" },
    { path: "locations.php", redirectTo: "/locations" },
    { path: "sleep-apnea.php", redirectTo: "/sleep-apnea" },
    { path: "tmj-symptoms.php", redirectTo: "/tmj-symptoms" },
    { path: "online-referral.php", redirectTo: "/online-referral" },
    { path: "facial-pain.php", redirectTo: "/facial-pain" },
    { path: "referral-form.php", redirectTo: "/referral-form" },
    { path: "sleep-disorders.php", redirectTo: "/sleep-disorders" },
    { path: "neck-jaw.php", redirectTo: "/neck-jaw" },
    { path: "new-patients.php", redirectTo: "/new-patients" },
    { path: "sleep-disorders-children.php", redirectTo: "/sleep-disorders-children" },
    { path: "tmj-symptoms-children.php", redirectTo: "/tmj-symptoms-children" },
    { path: "tmj-treatment-adult.php", redirectTo: "/tmj-treatment-adult" },
    { path: "tmj-treatment-children.php", redirectTo: "/tmj-treatment-children" },
    { path: "thankyou.php", redirectTo: "/thank-you" },

    // Unknown pages?
    { path: "tmj-sleep-therapy", redirectTo: "/" },
    { path: "faq.php", redirectTo: "/" },
    { path: "meet-team.php", redirectTo: "/" },

    // 404 Page
    // { path: "404", component: ErrorNotFoundComponent },
    { path: "**", redirectTo: "/" }
];
 
export const AppComponents: any = [];
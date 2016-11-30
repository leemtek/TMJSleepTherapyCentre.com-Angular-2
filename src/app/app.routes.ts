import { HomeComponent } from "./pages/home.component";
import { MeetDrComponent } from "./pages/meet-dr.component";

export const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "meet-dr", component: MeetDrComponent }
];
 
export const AppComponents: any = [
    HomeComponent
];
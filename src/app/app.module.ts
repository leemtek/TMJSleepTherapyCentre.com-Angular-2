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

@NgModule({
  declarations: [
    // Used throughout the project.
    HeaderComponent, FooterComponent,

    // Pages
    AppComponent,
    HomeComponent,
    MeetDrComponent
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

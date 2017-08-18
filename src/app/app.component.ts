import { Component, OnInit } from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';

// Google Analytics FN
declare let ga:Function;

@Component({
    selector: 'app-root',
    template: `
        <!-- ========================================================
            Oustside Structure Section
        ======================================================== -->
        <div id="outsidestructure"></div>

        
        <!-- ========================================================
            Navigation Menu
        ======================================================== -->
        <app-header>Loading Header...</app-header>
        

        <!-- ========================================================
            MAIN Contents
        ======================================================== -->
        <router-outlet></router-outlet>


        <!-- ========================================================
            Footer
        ======================================================== -->
        <app-footer></app-footer>
    `,
    styles: [``],
    providers: []
})
export class AppComponent implements OnInit {
    constructor(private router:Router) {
        this.router.events.subscribe(
            (event:Event) => {
                // Google Analytics
                if (event instanceof NavigationEnd) {
                    ga('set', 'page', event.urlAfterRedirects);
                    ga('send', 'pageview');
                } // if
            }
        ); // this.router.events.subscribe
    } // constructor(public router:Router)

    ngOnInit() {
        this.router.events.subscribe(
            (event:Event) => {
                // Whenever there is a change to the router, scrollTo() is initiated.
                if (!(event instanceof NavigationEnd)) {
                    return;
                } // if
                window.scrollTo(0, 0)
            }
        ); // this.router.events.subscribe
    } // ngOnInit()
} // AppComponent

import { Component } from '@angular/core';

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
export class AppComponent {
    constructor() { }
} // AppComponent

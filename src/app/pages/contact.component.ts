import { Component } from '@angular/core';
import { AppService } from "../app.service";

@Component({
    selector: 'app-contact',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g8">
                    <div class="conCon">
                        <h1>Contact Us</h1>
                        <p class="pContent">
                            <strong>Our Address</strong>
                            <br /> TMJ &amp; Sleep Therapy Centre of SF
                            <br /> 450 Sutter St., Ste 1708
                            <br /> San Francisco, CA&nbsp; 94108
                            <br />
                            <br /> Tel:&nbsp; (415) 226-7274 - (844) TMJ-9111
                            <br /> Fax: (866) 519-1570
                            <br />
                            <br />
                            <a href="mailto:info@tmjsleeptherapycentre.com">Email Us</a> </p>
                        <p class="pContent">
                            <strong>Office Hours:</strong>
                            <br /> Monday to Friday: 9:00am - 6:00pm
                            <br /> Saturday to Sunday: Closed
                        </p>
                        <p class="pContent">Please visit our other <a routerLink="/locations">locations</a>.</p>
                    </div>
                </div>
                <div class="col g4">
                    <div class="vidConMain">
                        <div class="vidCon">
                            <iframe width="80%" class="vidsizer" height="170" src="//www.youtube.com/embed/Ax2q8MJCRE8" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <h3>Charlotte's Story on Jaw and Facial Pain</h3>
                        <div class="vidCon">
                            <iframe width="80%" class="vidsizer" height="170" src="//www.youtube.com/embed/m-tToDZPRRQ" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <h3>Barbara's Story on TMJ/TMD and Myoclonus</h3>
                        <div class="vidCon">
                            <iframe width="80%" class="vidsizer" height="170" src="//www.youtube.com/embed/8I9btCPqwfI" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <h3>Lynn's Story on Migraines</h3>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: [AppService]
})
export class ContactComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(objAppService: AppService) {
        this.strImages = objAppService.objUrls.strImages;
        this.strAssetLocation = objAppService.objUrls.strMain;
    } // constructor
} // AppComponent

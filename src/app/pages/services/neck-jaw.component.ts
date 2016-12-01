import { Component } from '@angular/core';
import { AppService } from "../../app.service";

@Component({
    selector: 'app-neck-jaw',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">

                    <div class="conCon">
                        <h1>Neck & Jaw Pain</h1>

                        <img src="{{ strImages }}/neck-jaw-photo.jpg" width="306" height="381" alt="neck jaw san francisco" style="float:right; margin-left:40px;" />

                        <p>
                            A comprehensive exam of your neck and jaw is recommended in order to create an effective treatment plan. Jaw and neck disorders, and the pain associated with it, are considered to be some of the most misdiagnosed conditions, both by medical practitioners and even more so by those with the condition themselves. Dr. Alkhoury can provide a thorough evaluation and make recommendations to alleviate the daily pain you may be living with. 
                        </p>

                        <p>
                            Disorders that cause neck and jaw pain, that may seem small at first, oftentimes turn into a significantly more noticeable pain that is very disruptive in your day to day life.
                        </p>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: [AppService]
})
export class NeckJawComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(objAppService: AppService) {
        this.strImages = objAppService.objUrls.strImages;
        this.strAssetLocation = objAppService.objUrls.strMain;
    } // constructor
} // AppComponent

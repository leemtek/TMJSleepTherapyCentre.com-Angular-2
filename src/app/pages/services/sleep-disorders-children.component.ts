import { Component } from '@angular/core';
import { constObjConfig } from "../../shared/config";

import { SeoService } from "../../shared/seo.service";

@Component({
    selector: 'app-sleep-disorders-children',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <h1>Sleep Disorders and Treatment for Children</h1>

                        <img src="{{ strImages }}/sleep-disorder-child-photo.jpg" width="306" height="381" alt="facial pain san francisco" style="float:right; margin-left:40px;" />
                        
                        <p>
                            Physicians and psychologists estimate that as many as 30% of children may have a sleep disorder at some point during childhood. Sleep disorders have implications both for social-emotional adjustment as well as for school performance. For this reason, it is important for both parents and educators to understand how sleep works and how disruptions in normal sleep patterns can affect children and teenagers.
                        </p>
                        <p>
                            While most sleep disturbances are mild, fairly common, and fairly easy to treat, others may be more stubborn, or may show signs of potential physical problems that could have long-term consequences if left untreated.
                        </p>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``]
})
export class SleepDisordersChildrenComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(seoService: SeoService) {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;

        // SEO
        seoService.setTitle("Sleep Disorders and Treatment for Children - TMJ & Sleep Therapy Centre of San Francisco");
        seoService.setMetaDescription("Looking for a san francisco TMJ specialist or a sleep doctor? Our center offers neck, jaw and facial pain treatment and therapies in San Francisco's Bay area.");
    } // constructor
} // AppComponent

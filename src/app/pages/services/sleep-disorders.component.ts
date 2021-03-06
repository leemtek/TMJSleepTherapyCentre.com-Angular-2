import { Component } from '@angular/core';
import { constObjConfig } from "../../shared/config";

import { SeoService } from "../../shared/seo.service";

@Component({
    selector: 'app-sleep-disorders',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <h1>Sleep Disorders</h1>

                        <img src="{{ strImages }}/sleep-disorder-adult-photo.jpg" width="306" height="381" alt="sleep disorders san francisco" style="float:right; margin-left:40px;"/>
                        
                        <p>
                            While it is  possible to use questionnaires and visual evaluation to screen for suspected  obstructive sleep apnea (OSA), the primary method   for diagnosing OSA at present  is to have the patient undergo an   overnight sleep study, known as  polysomnography (PSG). This study measures and records a number of different  physiologic variables during sleep such as airflow, oxygen levels, brain  activity and respiratory   effort.<br><br>Once diagnosed,  several treatment options exist for dealing with OSA:
                        </p>
                        <p>
                            These include lifestyle changes such as an exercise and weight-loss regimen, medical intervention such as the addition of a sleeping device, or a dental orthotic  which can help to create long-term, healthy sleeping patterns, and finally Nasal CPAP (continuous positive air pressure), CPAP or surgery.
                        </p>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``]
})
export class SleepDisordersComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(seoService: SeoService) {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;

        // SEO
        seoService.setTitle("Sleep Disorders - TMJ & Sleep Therapy Centre of San Francisco");
        seoService.setMetaDescription("Looking for a san francisco TMJ specialist or a sleep doctor? Our center offers neck, jaw and facial pain treatment and therapies in San Francisco's Bay area.");
    } // constructor
} // AppComponent

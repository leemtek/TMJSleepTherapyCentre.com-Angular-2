import { Component } from '@angular/core';
import { constObjConfig } from "../../shared/config";

import { SeoService } from "../../shared/seo.service";

@Component({
    selector: 'app-tmj',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <h1>TMJ Treatment for Adults</h1>

                        <img src="{{ strImages }}/tmj-adult-photo.jpg" width="306" height="381" alt="tmj treatment san francisco" style="float:right; margin-left:40px;"/>
                        
                        <p>
                            A full  comprehensive exam is necessary to understand what is causing the patients pain  and discomfort. This evaluation is  achieved by   reviewing the patients' medical history as well as a detailed  clinical   exam to include jaw movement, skeletal structure and posture, airway and dental health, as well as cranial and neurological examination and muscle  palpations.
                        </p>

                        <p>
                            The two temporomandibular joints can differ not   only in size and shape, but also in  function. It is possible to have a   problem in one joint with the symptoms  expressed in the other joint.   Pain can migrate from one side to the other  because of the complexity   of this joint.
                        </p>
                        
                        <p>
                            Nerves, tendons, ligaments and muscles are all interconnected with the TMJ. When any one part  malfunctions, this   complex system can be compromised from working together in  harmony.   Therefore, a careful and thorough diagnosis is needed to determine the root cause.
                        </p>

                        <p>
                            Finding  the right practitioner to identify the root cause of the pain can be difficult  as the TMJ transcends the   boundaries between several health-care disciplines  including:   dentistry, neurology, pulmonology, otolaryngology or  gastroenterology,   chiropractic or physical therapy and psychology. Therefore, patients may find treatment approaches that vary from medication regimens for    pain management to molding a night-guard (which can actually exacerbate inflammation).
                        </p>

                        <p>
                            Dr. Alkhoury's state-of-the-art practice focuses on   a comprehensive evaluation for  diagnosis and non-invasive treatment   therapies. His office is equipped with the  latest technologies to   further diagnose TMJ problems, direct non-surgical  treatment, and   monitor treatment progress for maximum results.
                        </p>

                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``]
})
export class TmjComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(seoService: SeoService) {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;

        // SEO
        seoService.setTitle("TMJ - TMJ & Sleep Therapy Centre of San Francisco");
        seoService.setMetaDescription("Looking for a san francisco TMJ specialist or a sleep doctor? Our center offers neck, jaw and facial pain treatment and therapies in San Francisco's Bay area.");
    } // constructor
} // AppComponent

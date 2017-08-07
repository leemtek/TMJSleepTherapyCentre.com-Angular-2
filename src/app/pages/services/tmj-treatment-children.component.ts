import { Component } from '@angular/core';
import { constObjConfig } from "../../shared/config";

import { SeoService } from "../../shared/seo.service";

@Component({
    selector: 'app-tmj-treatment-children',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <h1>TMJ Treatment for Children</h1><br>

                        <img src="{{ strImages }}/tmj-child-photo.jpg" width="306" height="381" alt="facial pain san francisco" style="float:right; margin-left:40px;"/>
                        
                        <p>Although TMJ /  TMD (TMJ disorder/dysfunction) is  commonly seen in adults, it can be present in children at an early age.</p>
                        <p>
                            The common condition seen in children is  called Bruxism, the medical term for the grinding of teeth or the clenching of  jaws. Bruxism often occurs during deep sleep or while under stress. For  instance, a child might worry about a test at school or a change in routine (a  new sibling or a new teacher). Even arguing with parents and siblings can cause  enough stress to prompt teeth grinding or jaw clenching.
                        </p>
                        <p>
                            Unfortunately, if undiagnosed and left untreated, the  symptoms and condition increase with age. The good news with children is that  they are still in developmental stage and the earlier the problem is diagnosed  and treated the better the results!
                        </p>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``]
})
export class TmjTreatmentChildrenComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(seoService: SeoService) {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;

        // SEO
        seoService.setTitle("TMJ Treatment for Children - TMJ & Sleep Therapy Centre of San Francisco");
        seoService.setMetaDescription("Looking for a san francisco TMJ specialist or a sleep doctor? Our center offers neck, jaw and facial pain treatment and therapies in San Francisco's Bay area.");
    } // constructor
} // AppComponent

import { Component } from '@angular/core';
import { constObjConfig } from "../shared/config";

import { SeoService } from "../shared/seo.service";

@Component({
    selector: 'app-referral-form',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <h1>Referral Form</h1>
                        <br />
                        <p class="pContent"> You may refer patients to our office by filling out our secure online Referral Form below. After you have completed the form, please make sure to press the Submit button at the bottom to automatically send us your information. If you prefer to fax the form, you can print the Refrral Form and send it to (866) 519-1570. If you have questions, please do not hesitate to call our office at (866) 381-4701.</p>
                        <div class="col g8">
                            <a routerLink="/online-referral"><img src="{{ strImages }}/Online-referral-form-diamond.png" alt="Button Images" class="buttonSizer firstButton"></a>
                            <a href="{{ strAssetLocation }}/pdfs/Alkhoury_Referral_Sheet.pdf" target="_blank">
                                <img src="{{ strImages }}/Printable-referral-form-diamond.png" alt="Button Images" class="buttonSizer" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: [SeoService]
})
export class ReferralFormComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(seoService: SeoService) {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;

        // SEO
        seoService.setTitle("New Patients - TMJ & Sleep Therapy Centre of San Francisco");
    } // constructor
} // AppComponent

import { Component } from '@angular/core';
import { constObjConfig } from "../shared/config";

import { SeoService } from "../shared/seo.service";

@Component({
    selector: 'app-meet-dr',
    template: `
        <section id="wrapper">
            <!-- Content Section. -->
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <h1>Meet Dr. Alkhoury</h1><br />

                        <img src="{{ strImages }}/dr-alkhoury.png" width="292" height="389" alt="Dr. Jamil Alkhoury" style="float:right; margin-left:40px;"/>

                        <p>
                            Dr. Jamil Alkhoury, is a graduate of the University of  California, San Francisco (UCSF) with a degree in Advanced Education in General  Dentistry. With an insatiable thirst for  knowledge, he has completed extensive continuing education and advanced  training in the areas of craniofacial pain, temporomandibular dysfunction,  sleep breathing disorders and dental sleep medicine.
                        </p>
                        <p>
                            <br />
                            In 2013, Dr. Alkhoury completed rigorous study and testing  requirements to earn Fellowship &amp; Diplomate status in the American Academy  of Craniofacial Pain (AACP), and Fellowship in the American Academy of Implant  Dentistry (AAID). He has also completed multiple residencies and training with  Dr. Steven Olmos and TMJ &amp; Sleep Therapy Research. Dr. Alkhoury's mission  is to provide pain relief and improved quality of life for San Francisco &amp;  Bay area patients suffering with the conditions of craniofacial pain,  obstructive sleep apnea, chronic headaches and dysfunctions of the TM joints.<br />
                            <br />
                            As an artist in his spare time, Dr. Alkhoury understands the unique human  structure and the important relationships required for optimum comfort,  function, and overall health. He has been selected to join TMJ &amp; Sleep  Therapy Centres International with the opening of a Centre in the San Francisco  area.<br />
                            <br />
                            <strong>Achievements:</strong><br />
                            Diplomate American Board of Craniofacial Pain (DABCP)<br />
                            Diplomate American Board of Cranio - Dental Sleep Medicine (DABCDSM)<br />
                            Diplomate Clinical Orthodontics & Dentofacial Orthopedics<br />
                            Follow American Academy of Craniofacial Pain (FAACP)<br />
                            <br />
                            <strong>Memberships:<br />
                            </strong>California Dental Association (CDA)
                        </p>
                        <p>
                            American Dental Association (ADA)<br />
                            American Academy of Craniofacial Pain (AACP)<br />
                            American Academy of Cranio - Dental Sleep Medicine (ABCDSM)
                        </p>
                    </div><!-- /conCon -->
                </div><!-- /col g12 -->
            </div><!-- /maincontent -->
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: [SeoService]
})
export class MeetDrComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(seoService: SeoService) {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;

        // SEO
        seoService.setTitle("Meet Dr. Alkhoury - TMJ & Sleep Therapy Centre of San Francisco");
    } // constructor
} // AppComponent

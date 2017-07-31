import { Component } from '@angular/core';
import { constObjConfig } from "../../shared/config";

import { SeoService } from "../../shared/seo.service";

@Component({
    selector: 'app-orthodontics',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <h1 style="margin-bottom: 0px;">Orthodontics</h1>
                        <h3>So much more than just straight teeth</h3>

                        <img src="{{ strImages }}/orthodontics-photo.jpg" width="306" height="381" alt="complex orthodontics san francisco" style="float:right; margin-left:40px;" />

                        <p>
                            Airway driven dentofacial orthodontics for children as well as adults treats the underlying cause of malocclusion (bad bite). The presence of a bad bite is heavily influenced by the existence of a problem in the airway. We practice airway driven orthodontics and know that the jaw can be encouraged to grow and be corrected with orthopedic appliances and braces that move the jaw, open the nasal and skeletal symmetry, and improve or correct skeletal abnormalities. Orthodontic treatment is much more involved than just achieving straight teeth. Complex therapies can go as far as changing oral geometry - the shape of your mouth. The benefits of such extensive correction can go far beyond a nice smile. In certain cases, the health of your entire head, neck, and upper shoulder area may be changed for the better. Because of the effect of oral shape and alignment on the TMJ, proper orthodontic care can influence the following: 
                        </p>

                        <ul style="margin-top:0px; margin-left:30px;">
                            <li>Migraines</li>
                            <li>Other headaches</li>
                            <li>General craniofacial pain</li>
                            <li>Upper-shoulder discomfort</li>
                            <li>Dizziness</li>
                            <li>Sleep apnea</li>
                            <li>Hearing problems</li>
                        </ul>

                        <p class="space-top-40"><strong>TMJ and Orthodontics</strong></p>
                        <p>
                            Some people can relapse from prior orthodontics which is known as Complex Orthodontics. Complex Orthodontics is a comprehensive treatment for pain management and correcting issues with the temporomandibular joint. In some cases, orthodontic correction of underlying problems with the TMJ can be essential to alleviating or ending other medical complaints.
                        </p>

                        <p class="space-top-40"><strong>Complex &amp; Functional Orthodontics, Phase II TM Treatment:</strong></p>
                        <p>
                            What’s Functional Orthodontics?<br />
                            It is reshaping and repositioning the upper jaw and lower jaw to a more harmonious
                            position and better airways as well as straightening the teeth for growing patients
                            (children) and none growing adults.
                        </p>

                        <p class="space-top-40 underline">For Growing Children: (SDB-Sleep Disorder Breathing)</p>
                        <p>
                            Identifying of any SDB- mouth breathing at early age is a key for a better airway
                            development, then managing the Growth &amp; Development of upper and lower Jaw
                            orthopedically as early as 2 years of age to correct the problem is much better &amp; easier
                            than managing the symptoms later in life after growth is completed.
                        </p>
                        <p>
                            Improve nasal breathing by evaluating any presence of enlarged tonsils &amp; adenoids first
                            then orthopedically expanding the upper jaw and/or re-posturing the lower jaw into
                            optimum position where airways are maximized should be the treatment of choice here.
                        </p>
                        <div class="group">
                            <div class="col g6"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images/orthodontics/ortho1-children.png" class="width-100p" /></div>
                            <div class="col g6"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images/orthodontics/ortho2-children.png" class="width-100p" /></div>
                        </div>
                        <div class="group">
                            <div class="col g6"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images/orthodontics/ortho3-children.png" class="width-100p" /></div>
                            <div class="col g6"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images/orthodontics/ortho4-children-after-expansion.png" class="width-100p" /></div>
                        </div>
                        <div class="group">
                            <div class="col g6"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images/orthodontics/ortho6-children.png" class="width-100p" /></div>
                        </div>

                        <p class="space-top-40 underline">For Adults: Phase II TM Treatment:</p>
                        <p>
                            After successfully finishing Phase I TM treatment, stabilizing the jaw joint and re
                            posturing the lower jaw in a better position, for long term stabilization, Phase II TM
                            treatment is needed in some cases to move the teeth orthodontically into a better
                            position that provides less stress load on the jaw joint and maintain joint space
                            decompressed (disc capturing).
                        </p>

                        <div class="group">
                            <div class="col g6"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images/orthodontics/ortho1-adults.png" class="width-100p" /></div>
                            <div class="col g6"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images/orthodontics/ortho2-adults.png" class="width-100p" /></div>
                        </div>
                        <div class="group">
                            <div class="col g6"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images/orthodontics/ortho3-adults.png" class="width-100p" /></div>
                            <div class="col g6"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images/orthodontics/ortho4-adults.png" class="width-100p" /></div>
                        </div>
                        <div class="group">
                            <div class="col g6"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images/orthodontics/ortho6-adults.png" class="width-100p" /></div>
                        </div>
                        <div class="group">
                            <div class="col g6">
                                <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images/orthodontics/ortho7-adults.png" class="width-100p" />
                                <div>Loss of Joint Space</div>
                            </div>
                            <div class="col g6">
                                <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images/orthodontics/ortho8-adults.png" class="width-100p" />
                                <div>Regained Joint Space</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: [SeoService]
})
export class OrthodonticsComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(seoService: SeoService) {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;

        // SEO
        seoService.setTitle("Orthodontics - TMJ & Sleep Therapy Centre of San Francisco");
    } // constructor
} // AppComponent

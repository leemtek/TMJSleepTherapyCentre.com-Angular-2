import { Component } from '@angular/core';
import { constObjConfig } from "../../shared/config";

import { SeoService } from "../../shared/seo.service";

@Component({
    selector: 'app-craniofacial',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <h1>Headaches - Craniofacial Pain</h1>

                        <img src="{{ strImages }}/craniofacial-photo.jpg" width="306" height="381" alt="craniofacial pain san francisco" style="float:right; margin-left:40px;"/>

                        <p>
                            Craniofacial Pain refers to the discomfort of the head and face. It is very difficult to endure pain we feel in our head and face opposed to other parts of our body. When the discomfort is at a significant level, it can adversely affect the way we speak, eat, and breathe. When present in a particular part of the head, certain craniofacial pain can even affect equilibrium, causing difficulty in how we balance our entire body.
                        </p>
                        <p>
                            According to the International Classification of Headache Disorders (ICHD), there are four primary types of headaches: migraines, tension headaches, cluster headaches and other primary headaches. Secondary causes of headaches include head or neck trauma and injuries, stroke, intracranial hemorrhage, and vascular malformations. 
                        </p>
                        <p>
                            <strong>Migraine Headaches</strong>: Research has shown us that genetic and hormone factors play a significant factor and women get them more than men. While the cause of migraines is unknown, there are a number of triggers in which are thought to cause a migraine attack. Although the strength and correlation are uncertain, common triggers are stress, fatigue and hunger.
                        </p>
                        <p>
                            <strong>Tension Headaches</strong>: Tension headaches are the most common type of headache. These occur when muscles in the head or neck become tense, which oftentimes come from stress, injury, or holding your head in a strenuous position for a long period of time. Other possible triggers include caffeine, alcohol, clenching of the jaw and fatigue. 
                        </p>
                        <p>
                            <strong>Cluster Headaches</strong>: While there is no known reason as to the exact cause of cluster headaches, it is thought to be related to a sudden release of histamine or serotonin. This can be triggered by a number of factors including alcohol, smoking, high altitude, bright lights, and heat. If you are currently experiencing any reoccurring headaches, jaw discomfort, or any pain in your head, face, and the surrounding area on your body, and the pain has been recurring, we recommend you contact Dr. Alkhoury right away for a consultation.
                        </p>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: [SeoService]
})
export class CraniofacialComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(seoService: SeoService) {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;

        // SEO
        seoService.setTitle("Craniofacial - TMJ & Sleep Therapy Centre of San Francisco");
    } // constructor
} // AppComponent

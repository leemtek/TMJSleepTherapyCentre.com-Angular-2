import { Component } from '@angular/core';
import { constObjConfig } from "../shared/config";

@Component({
    selector: 'app-home',
    template: `
        <section id="wrapper">
            <!-- Content Section. -->
            <div id="maincontent" class="group">
                <div class="col g8">
                    <div class="conCon">
                        <h1>Breathe, Sleep, Heal and Live</h1>
                        <h3>Comprehensive Solutions for TMJ & Sleep Therapy</h3>

                        <p class="pContent">
                            Do you suffer from jaw or neck pain, headaches, facial pain, tense muscles or other symptoms that become part of your daily routine and don't seem to go away?  Have you seen a TMJ or dental sleep professional or are receiving treatment to end your pain?
                            <br />
                            <br />
                            You could be one of millions of Americans living with Temporomandibular Mandibular Joint (TMJ) disorders and sleep apnea. If left untreated, one's quality of life may be interrupted by serious migraines. The first step to regaining quality of life and comfort is a proper diagnosis. Dr. Alkhoury, at the TMJ & Sleep Therapy Centre is a dedicated specialist that understands TMJ disorders, headaches, face pain, neck pain, and sleep apnea, which if not treated properly, can lead to unnecessary suffering.
                            <br />
                            <br />
                            Dr. Alkhoury's non-surgical approach to treatment follows the standardized, research-based protocols that have given relief to thousands of patients. He is an experienced practitioner that has numerous hours of continuing education and expertise in this specialty.
                        </p>

                        <div class="col g12">
                            <a routerLink="/tmj">
                                <img src="{{ strImages }}/btn-1.png" alt="Button Images" class="buttonSizer ">
                            </a>
                            <a routerLink="/sleep-disorders">
                                <img src="{{ strImages }}/btn-2.png" alt="Button Images" class="buttonSizer ">
                            </a>
                            <br />
                            <a routerLink="new-patients">
                                <img src="{{ strImages }}/btn-3.png" alt="Button Images" class="buttonSizer">
                            </a>
                            <a routerLink="appointment">
                                <img src="{{ strImages }}/btn-4.png" alt="Button Images" class="buttonSizer ">
                            </a>
                        </div>

                        <div class="careCreditDiv">
                            <div class="careCreditBox">
                                <a href="https://www.carecredit.com/apply/confirm.html?encm=UjMEPVEzUjcGOgRgU2cKYwU_UTMBY1NtAG1XZFQ6U2A&?cmpid=B3CALAdToolkitANGraphic"><img src="http://www.carecredit.com/adtoolkit/assets/pages/library/buttons/350x259/CareCredit_Button_ApplyNow_tile_v2.png"/></a>
                            </div>
                            <div class="careCreditBox">
                                <a href="https://www.carecredit.com/Pay/684XBX/"><img src="http://www.carecredit.com/adtoolkit/assets/pages/library/buttons/PMP_Buttons/350x259/CareCredit_Button_PMP_350x259_c_v1.png"/></a>
                            </div>
                        </div>
                    </div><!-- /conCon -->

                </div><!-- /col -->

                <div class="col g4">
                    <div class="vidConMain">
                        <div class="vidCon">
                            <video class="homeVideo" controls preload="metadata" poster="{{ strImages }}/dr-gregory-poster.jpg">
                                <source src="{{ strAssetLocation }}/videos/Dr-James-Gregory.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/Dr-James-Gregory.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/Dr-James-Gregory.ogv" type="video/ogg">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <h3>Dr. James Gregory's Story</h3>
                        
                        <div class="vidCon">
                            <video class="homeVideo" controls preload="metadata" poster="{{ strAssetLocation }}/images/joyce-poster.jpg">
                                <source src="{{ strAssetLocation }}/videos/Joyce.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/Joyce.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/Joyce.ogv" type="video/ogg">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <h3>Joyce's Story</h3>
                                            
                        <div class="vidCon">
                            <video class="homeVideo" controls preload="metadata" poster="{{ strAssetLocation }}/images/mayrose-poster.jpg">
                                <source src="{{ strAssetLocation }}/videos/Mayrose.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/Mayrose.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/Mayrose.ogv" type="video/ogg">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <h3>Mayrose's Story</h3>
                                            
                        <div class="vidCon">
                            <video class="homeVideo" controls preload="metadata" poster="{{ strAssetLocation }}/images/rabi-dovbe-poster.jpg">
                                <source src="{{ strAssetLocation }}/videos/Rabi-Dovbe.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/Rabi-Dovbe.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/Rabi-Dovbe.ogv" type="video/ogg">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <h3>Rabi Dovbe's Story</h3>
                                            
                        <div class="vidCon">
                            <video class="homeVideo" controls preload="metadata" poster="{{ strAssetLocation }}/images/chan-poster.jpg">
                                <source src="{{ strAssetLocation }}/videos/Chan.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/Chan.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/Chan.ogv" type="video/ogg">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <h3>Chan's Story</h3>
                    </div><!-- /vidConMain -->
                </div>

            </div><!-- /maincontent -->
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: []
})
export class HomeComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor() {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;
    } // constructor
} // AppComponent

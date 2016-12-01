import { Component } from '@angular/core';
import { AppService } from "../app.service";

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
                        
                        <h3>Chelsea's Story on TMJ</h3>
                        <div class="vidCon">
                            <iframe width="80%" class="vidsizer" height="170" src="//www.youtube.com/embed/Ax2q8MJCRE8" frameborder="0" allowfullscreen></iframe>
                        </div>

                        <h3>Charlotte's Story on Jaw and Facial Pain</h3>
                        <div class="vidCon">
                            <iframe width="80%" class="vidsizer" height="170" src="//www.youtube.com/embed/m-tToDZPRRQ" frameborder="0" allowfullscreen></iframe>
                        </div>

                        <h3>Barbara's Story on TMJ/TMD and Myoclonus</h3>
                        <div class="vidCon">
                            <iframe width="80%" class="vidsizer" height="170" src="//www.youtube.com/embed/8I9btCPqwfI" frameborder="0" allowfullscreen></iframe>
                        </div>

                        <h3>Lynn's Story on Migraines</h3>
                    </div><!-- /vidConMain -->
                </div>

            </div><!-- /maincontent -->
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: [AppService]
})
export class HomeComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(objAppService: AppService) {
        this.strImages = objAppService.objUrls.strImages;
        this.strAssetLocation = objAppService.objUrls.strMain;
    } // constructor
} // AppComponent

import { Component } from '@angular/core';
import { AppService } from "../../app.service";

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
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: [AppService]
})
export class OrthodonticsComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(objAppService: AppService) {
        this.strImages = objAppService.objUrls.strImages;
        this.strAssetLocation = objAppService.objUrls.strMain;
    } // constructor
} // AppComponent

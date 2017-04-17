import { Component } from '@angular/core';
import { constObjConfig } from "../shared/config";

@Component({
    selector: 'app-new-patients',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <div class="col g8">
                            <h1>New Patients</h1>
                            <p class="pContent">
                                Welcome to our practice, we are excited you have put your trust in us for your healthcare needs. For your convenience, you can utilize our forms resource center below. If you have questions, please do not hesitate to call our office at (866) 381-4701.
                            </p>
                        </div>
                        <div class="col g4">
                            <a href="https://www.hcwisecureforms.com/Alkhoury/forms/new-patient2.html" target="_blank"><img src="{{ strImages }}/online-form-button.png" width="100%" alt="Online Form Submission" /></a>
                            <br>
                            <a href="{{ strAssetLocation }}/pdfs/PATIENT-QUESTIONNAIRE.pdf" target="_blank"><img src="{{ strImages }}/downloadable-patient-form.png" width="100%" alt="Patient Form" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: []
})
export class NewPatientsComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor() {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;
    } // constructor
} // AppComponent

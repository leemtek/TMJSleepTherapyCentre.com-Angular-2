import { Component } from '@angular/core';
import { AppService } from "../../app.service";

@Component({
    selector: 'app-facial-pain',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <h1>Facial Pain</h1>

                        <img src="{{ strImages }}/facial-pain-photo.jpg" width="306" height="381" alt="facial pain san francisco" style="float:right; margin-left:40px;" />


                        <p>
                            There are many causes of facial pain; common symptoms include fatigue, stiffness and general pain in your facial muscles. While the pain may become tolerable on a daily level, it may permanently affect the way you live by limiting your motion when you eat, speak, and express yourself, especially when left undiagnosed and ultimately untreated. If pain continues and is left untreated, underlying causes may result in an extended period of discomfort and may lead to other disorders in the future. 
                        </p>

                        <p>
                            <strong>Some of the possible causes include:</strong>
                        </p>

                        <ul style="margin-left:30px;">
                            <li>Abscessed Tooth Or Teeth</li>
                            <li>Cluster Headaches</li>
                            <li>Myofascial Pain Syndrome</li>
                            <li>Trigeminal Neuralgia</li>
                            <li>Sinusitis</li>
                            <li>Facial Injuries</li>
                        </ul>

                        <p class="space-top-20">
                            If you are experiencing facial pain of any kind, it is best to have a comprehensive evaluation completed. Contact our office today to schedule an appointment with Dr. Alkhoury.
                        </p>
                    </div><!-- /conCon -->
                </div><!-- /col -->
            </div><!-- /#maincontent -->
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: [AppService]
})
export class FacialPainComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(objAppService: AppService) {
        this.strImages = objAppService.objUrls.strImages;
        this.strAssetLocation = objAppService.objUrls.strMain;
    } // constructor
} // AppComponent
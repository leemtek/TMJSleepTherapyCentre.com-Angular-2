import { Component } from '@angular/core';
import { constObjConfig } from "../shared/config";

@Component({
    selector: 'app-testimonials',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <h1>Testimonials</h1>
                        <br>
                        <div class="col g3">
                            <video class="testVideo" controls preload="none" poster="{{ strImages }}/awsome-poster.jpg">
                                <source src="{{ strAssetLocation }}/videos/Awsome-Testimonial.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/Awsome-Testimonial.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/Awsome-Testimonial.ogv" type="video/ogg"> Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="col g3">
                            <video class=" testVideo" controls preload="none" poster="{{ strImages }}/claudia-poster.jpg">
                                <source src="{{ strAssetLocation }}/videos/Claudia-Testimonial.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/Claudia-Testimonial.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/Claudia-Testimonial.ogv" type="video/ogg"> Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="col g3">
                            <video class="testVideo" controls preload="none" poster="{{ strImages }}/laura-poster.jpg">
                                <source src="{{ strAssetLocation }}/videos/Laura-Testimonial.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/Laura-Testimonial.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/Laura-Testimonial.ogv" type="video/ogg"> Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="col g3">
                            <video class="testVideo" controls preload="none" poster="{{ strImages }}/tmj-poster.png">
                                <source src="{{ strAssetLocation }}/videos/tmj-vid.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/tmj-vid.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/tmj-vid.ogv" type="video/ogv"> Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="col g3">
                            <video class=" testVideo" controls preload="none" poster="{{ strImages }}/emily-poster.png">
                                <source src="{{ strAssetLocation }}/videos/emily-vid.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/emily-vid.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/emily-vid.ogv" type="video/ogv"> Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="col g3">
                            <video class="testVideo" controls preload="none" poster="{{ strImages }}/test1-poster.jpg">
                                <source src="{{ strAssetLocation }}/videos/test-1.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/test-1.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/test-1.ogv" type="video/ogg"> Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="col g3">
                            <video class="testVideo" controls preload="none" poster="{{ strImages }}/test2-poster.jpg">
                                <source src="{{ strAssetLocation }}/videos/test-2.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/test-2.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/test-2.ogv" type="video/ogg"> Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="col g3 ">
                            <video class="testVideo" controls preload="none" poster="{{ strImages }}/test3-poster.jpg">
                                <source src="{{ strAssetLocation }}/videos/test-3.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/test-3.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/test-3.ogv" type="video/ogg"> Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="col g3">
                            <video class=" testVideo" controls preload="none" poster="{{ strImages }}/maura-poster.jpg">
                                <source src="{{ strAssetLocation }}/videos/maura-vid.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/maura-vid.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/maura-vid.ogv" type="video/ogv"> Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="col g3">
                            <video class=" testVideo" controls preload="none" poster="{{ strImages }}/sleep-apnea-poster.png">
                                <source src="{{ strAssetLocation }}/videos/sleep-apnea-vid.mp4" type="video/mp4">
                                <source src="{{ strAssetLocation }}/videos/sleep-apnea-vid.webm" type="video/webm">
                                <source src="{{ strAssetLocation }}/videos/sleep-apnea-vid.ogv" type="video/ogv"> Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: []
})
export class TestimonialsComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor() {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;
    } // constructor
} // AppComponent

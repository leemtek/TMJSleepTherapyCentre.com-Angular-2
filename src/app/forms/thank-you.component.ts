import { Component } from "@angular/core";
import { constObjConfig } from "../shared/config";
import { SeoService } from "../shared/seo.service";

@Component({
    selector: "app-form-thank-you",
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <h1 class="text-center">Thank You</h1>

                        <p class="text-center">We have received your information.</p>

                        <p class="text-center">~ TMJ & Sleep Therapy Centre Team</p>
                    </div><!-- /conCon -->
                </div><!-- /col -->
            </div><!-- #maincontent -->
        </section>
    `,
    styles: [``]
})
export class ThankYouComponent {
    constructor(private seoService: SeoService) {
        // SEO
        seoService.setTitle("Thank You - TMJ & Sleep Therapy Centre of San Francisco");
        seoService.setMetaDescription("Looking for a san francisco TMJ specialist or a sleep doctor? Our center offers neck, jaw and facial pain treatment and therapies in San Francisco's Bay area.");
    }
} // ThankYouComponent
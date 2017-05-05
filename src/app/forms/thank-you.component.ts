import { Component } from "@angular/core";
import { constObjConfig } from "../shared/config";

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

} // ThankYouComponent
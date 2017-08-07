import { Component } from '@angular/core';
import { constObjConfig } from "../shared/config";

import { SeoService } from "../shared/seo.service";

@Component({
    selector: 'tmj-error-not-found',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <h1>Page Not Found :(</h1>
                        <br />
                        <p class="pContent">The page you are looking for isn't here.  However, you can find additional links above or you can visit our <a routerLink="/">home page</a>.</p>
                        <p class="pContent"><a routerLink="/">View Our Homepage</a></p>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``]
})
export class ErrorNotFoundComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(seoService: SeoService) {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;

        // SEO
        seoService.setTitle("Page Not Found - TMJ & Sleep Therapy Centre of San Francisco");
        seoService.setMetaDescription("Uh oh! The page you are looking for is not located here.  Perhaps you were trying to reach our home page?");
    } // constructor
} // AppComponent

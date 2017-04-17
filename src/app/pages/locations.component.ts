import { Component } from '@angular/core';
import { constObjConfig } from "../shared/config";

@Component({
    selector: 'app-locations',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <h1>Locations</h1>
                        <br />
                        <div class="col g4">
                            <p class="pContent">
                                <strong>San Francisco</strong>
                                <br /> 450 Sutter St., Ste 1708
                                <br /> San Francisco, CA 94108
                                <br /> Tel:&nbsp; (844) 865- 9111
                                <br /> Fax: (866) 519-1570</p>
                        </div>
                        <div class="col g4">
                            <p class="pContent">
                                <strong>Brentwood</strong>
                                <br /> 4411 Balfour Rd., Ste D
                                <br /> Brentwood, CA 94513
                                <br /> Tel:&nbsp; (866) 381- 4701
                                <br /> Fax: (866) 519-1570</p>
                        </div>
                        <div class="col g3">
                            <p class="pContent">
                                <strong>San Jose </strong>
                                <br />
                                <em><strong>COMING SOON! </strong></em>
                                <br />
                                <br /> Tel: (866) 381- 4701
                                <br /> Fax: (866) 519-1570
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: []
})
export class LocationsComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor() {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;
    } // constructor
} // AppComponent

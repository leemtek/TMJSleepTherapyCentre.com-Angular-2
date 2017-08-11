import { Component, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { constObjConfig } from "../shared/config";
import { Http, Response, Headers } from "@angular/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// rxjs
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"; // used for .map

// Enables jQuery
declare var $:any;

import { SeoService } from "../shared/seo.service";

// Define User Details
export interface User {
    strName: string;
    strPhone: string;
    strEmail: string;
    strMessage: string;

    googleResponse: string;
} // User

@Component({
    selector: 'tmj-contact',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g4">
                    <div class="conCon">
                        <h1>Contact Us</h1>
                        <div class="pContent">
                            <h2 class="default-h2">Send Us a Direct Message</h2>
                            <div class="space-top-20">
                                <form [formGroup]="form" (ngSubmit)="mdSend(form)">
                                    <div><input type="text" class="form width-90p border-color-red" formControlName="strName" placeholder="Full Name *" /></div>
                                    <div class="space-top-10"><input type="text" class="form width-90p border-color-red" formControlName="strPhone" placeholder="Phone *" /></div>
                                    <div class="space-top-10"><input type="email" class="form width-90p" formControlName="strEmail" placeholder="Email Address" /></div>
                                    <div class="space-top-10"><textarea class="form width-90p height-100 border-color-red" formControlName="strMessage" placeholder="Your Message *"></textarea></div>
                                    <div class="space-top-10">
                                        <re-captcha 
                                            (captchaResponse)="mdCaptchaHandle($event)" 
                                            (captchaExpired)="mdCaptchaExpired()"
                                            site_key="6LcsqyMTAAAAAMm-8ty3y6B4mye31TbEvi1Ku8LW"
                                        ></re-captcha>
                                    </div>
                                    <div class="space-top-10"><button id="formSubmit" type="submit" class="submitForm" [disabled]="form.invalid || this.strGoogleResponse == null">Submit</button></div>
                                </form>
                            </div>
                        </div>

                        <div class="pContent">
                            <h2 class="default-h2">Our Address</h2>
                            <br /> TMJ &amp; Sleep Therapy Centre of SF
                            <br /> 450 Sutter St., Ste 1708
                            <br /> San Francisco, CA&nbsp; 94108
                            <br />
                            <br /> Tel:&nbsp; (415) 226-7274 - (844) TMJ-9111
                            <br /> Fax: (866) 519-1570
                            <br />
                            <br />
                            <a href="mailto:info@tmjsleeptherapycentre.com">Email Us</a>
                        </div>

                        <div class="pContent">
                            <h2 class="default-h2">Office Hours:</h2>
                            <br /> Monday to Friday: 9:00am - 6:00pm
                            <br /> Saturday to Sunday: Closed
                        </div>
                        <p class="pContent">Please visit our other <a routerLink="/locations">locations</a>.</p>
                    </div>
                </div><!-- /col -->

                <div class="col g4">
                    <div class="conCon">
                        <div class="careCreditDiv">
                            <div class="careCreditBox cCFullWidth">
                                <a href="https://www.carecredit.com/apply/confirm.html?encm=UjMEPVEzUjcGOgRgU2cKYwU_UTMBY1NtAG1XZFQ6U2A&?cmpid=B3CALAdToolkitANGraphic"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images/CareCredit_Button_ApplyNow_tile_v2.png"/></a>
                            </div>
                            <div class="careCreditBox cCFullWidth">
                                <a href="https://www.carecredit.com/Pay/684XBX/"><img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images/CareCredit_Button_PMP_350x259_c_v1.png"/></a>
                            </div>
                        </div><!-- /careCreditDiv -->
                    </div><!-- /conCon -->
                </div><!-- /col -->

                <div class="col g4">
                    <div class="vidConMain">
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
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [`
        .border-color-red { border-color: red; }
    `]
})
export class ContactComponent {
    form: FormGroup;

    private strPostUrl: string = "https://us-central1-leemtek-secure-forms.cloudfunctions.net/tmjsleeptherapycentre/contact";
    strAssetLocation: string;
    strImages: string;
    objUserDetails;
    strGoogleResponse: string;
    
    constructor(private seoService: SeoService, @Inject(FormBuilder) fb: FormBuilder, private http: Http, private router: Router) {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;

        // SEO
        seoService.setTitle("Contact - TMJ & Sleep Therapy Centre of San Francisco");
        seoService.setMetaDescription("Contact us today at 844-TMJ-9111 or email us at info@tmjsleeptherapycentre.com");

        // Form Details
        this.form = fb.group({
            strName: [null, Validators.required],
            strPhone: [null, Validators.required],
            strEmail: [null],
            strMessage: [null, Validators.required]
        }) // this.form
    } // constructor

    // Send to REST endpoint.
    mdSend({value, valid}: {value: User, valid: boolean}) {
        // Take value and convert to JSON
        this.objUserDetails = value;
        // Attach successful Google reCAPTCHA.
        this.objUserDetails.googleResponse = this.strGoogleResponse;
        
        // Disable submit button and indicate "Please wait...".
        $('#formSubmit').text('Please Wait...');
        $('#formSubmit').removeClass('btn-default').addClass('btn-info');
        $("#formSubmit").prop('disabled', true);

        // console.log(this.objUserDetails);

        this.mdSendData(this.objUserDetails)
            .subscribe(data => {
                if (data.status === "sent") {
                    // Success
                    $('#formSubmit').removeClass('btn-info').addClass('btn-success');
                    $("#formSubmit").prop('disabled', true);

                    this.router.navigate(["/thank-you"]);
                } else {
                    // Something went wrong.
                    $('#formSubmit').text('Please try again.');
                    $('#formSubmit').removeClass('btn-info').addClass('btn-danger');
                    $("#formSubmit").prop('disabled', false);
                } // else
            }) // subscribe()
        ; // sendEmailService.mdSendData()
    } // mdSend()

    // Handle the captcha response and save to objUserDetails.captchaResponse
    mdCaptchaHandle(strResponse: string): void {
        this.strGoogleResponse = strResponse;
    } // mdCaptchaHandle(response)

    // Handles expired captchas.
    mdCaptchaExpired(): void {
        this.strGoogleResponse = null;
    } // mdCaptchaHandle()

    // Send the email to REST API.
    mdSendData(objFinalSenderInfo: any) {
        const strBody = JSON.stringify(objFinalSenderInfo);
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post(this.strPostUrl, strBody, { headers: headers })
            .map((data: Response) => data.json())
        ; // this.http.post()
    }
} // AppComponent

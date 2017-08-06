/* ============================================================
    The form uses NG FormBuilder.
============================================================ */
import { Component, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { constObjConfig } from "../../shared/config";
import { MeetDrRSVP } from "./meet-dr-rsvp.service";

import { User } from "./user.interface";

// Enables jQuery
declare var $:any;

@Component({
    selector: 'tmj-meet-dr-rsvp',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g8">
                    <div class="conCon">
                        <h1>RSVP</h1>
                        
                        <form [formGroup]="form" (ngSubmit)="mdSend(form)">
                            <p><input type="text" class="form" placeholder=" FIRST NAME *" formControlName="strFirstName" /></p>
                            <p><input type="text" class="form" placeholder=" LAST NAME *" formControlName="strLastName" /></p>
                            <p><input type="text" class="form" placeholder=" PRACTICE NAME *" formControlName="strPracticeName" /></p>
                            <p><input type="text" class="form" placeholder=" EVENT DATE * (Example: December 1, 2017)" formControlName="strEventDate" /></p>
                            
                            <p><input type="text" class="form" placeholder=" TELEPHONE *" formControlName="strPhone" /></p>
                            <p><input type="text" class="form" placeholder=" EMAIL ADDRESS" formControlName="strEmail" /></p>
                            
                            <p>* Indicates Response Required</p>

                            <div class="space-bottom-20">
                                <re-captcha 
                                    (captchaResponse)="mdCaptchaHandle($event)" 
                                    (captchaExpired)="mdCaptchaExpired()"
                                    site_key="6LcsqyMTAAAAAMm-8ty3y6B4mye31TbEvi1Ku8LW"
                                ></re-captcha>
                            </div>

                            <button id="formSubmit" type="submit" class="submitForm" [disabled]="form.invalid || this.strGoogleResponse == null">Submit</button>
                        </form>
                    </div>
                </div>
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
    styles: [``],
    providers: [MeetDrRSVP]
})
export class MeetDrRSVPComponent {
    form: FormGroup;

    strAssetLocation: string;
    strImages: string;
    objUserDetails;
    strGoogleResponse: string;
    
    constructor(private appointmentService: MeetDrRSVP, @Inject(FormBuilder) fb: FormBuilder, private router: Router) {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;

        // Form Details
        this.form = fb.group({
            strFirstName: [null, Validators.required],
            strLastName: [null, Validators.required],
            strPracticeName: [null, Validators.required],
            strEventDate: [null, Validators.required],
            strPhone: [null, Validators.required],
            strEmail: [""]
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

        this.appointmentService.mdSendData(this.objUserDetails)
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
} // AppointmentComponent

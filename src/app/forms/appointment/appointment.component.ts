/* ============================================================
    The form uses NG FormBuilder.
============================================================ */
import { Component, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { constObjConfig } from "../../shared/config";
import { AppointmentService } from "./appointment.service";

import { User } from "./user.interface";

// Enables jQuery
declare var $:any;

@Component({
    selector: 'app-appointment',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g8">
                    <div class="conCon">
                        <h1>Schedule An Appointment</h1>
                        
                        <form [formGroup]="form" (ngSubmit)="mdSend(form)">
                            <p>
                                <input type="text" class="form" placeholder=" YOUR NAME *" formControlName="strName" />
                            </p>
                            
                            <p>
                                <input type="text" class="form" placeholder=" TELEPHONE *" formControlName="strPhone" />
                            </p>
                            
                            <p>
                                <input type="text" class="form" placeholder=" EMAIL ADDRESS *" formControlName="strEmail" />
                            </p>
                            
                            <select formControlName="strContactMethod">
                                <option value="NA">METHOD OF CONTACT</option>
                                <option value="home">Home Phone</option>
                                <option value="work">Work Phone</option>
                                <option value="cell">Cell Phone</option>
                                <option value="email">E-Mail</option>
                            </select>

                            <p>
                                <textarea placeholder=" ADDITIONAL INFO" class="form2" formControlName="strMessage"></textarea>
                            </p>
                            
                            <p>
                                What is the best day for your appointment? (Please check all that apply)<br />
                                <label><input type="checkbox" value="Monday" formControlName="isMonday" /> Monday</label><br />
                                <label><input type="checkbox" value="Tuesday" formControlName="isTuesday" /> Tuesday</label><br />
                                <label><input type="checkbox" value="Wednesday" formControlName="isWednesday" /> Wednesday</label><br />
                                <label><input type="checkbox" value="Thursday" formControlName="isThursday" /> Thrusday</label><br />
                                <label><input type="checkbox" value="Friday" formControlName="isFriday" /> Friday</label>
                            </p>
                            
                            <p>
                                What is the best time of day for your appt.?<br />
                                <label><input type="radio" value="AM" formControlName="strTimeOfDay" /> AM</label><br />
                                <label><input type="radio" value="PM" formControlName="strTimeOfDay" /> PM</label>
                            </p>
                            
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
    providers: [AppointmentService]
})
export class AppointmentComponent {
    form: FormGroup;

    strAssetLocation: string;
    strImages: string;
    objUserDetails;
    strGoogleResponse: string;
    
    constructor(private appointmentService: AppointmentService, @Inject(FormBuilder) fb: FormBuilder, private router: Router) {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;

        // Form Details
        this.form = fb.group({
            strName: ["", Validators.required],
            strPhone: ["", Validators.required],
            strEmail: ["", Validators.required],
            strContactMethod: ["NA"],
            
            strMessage: [],

            isMonday: [true],
            isTuesday: [false],
            isWednesday: [false],
            isThursday: [false],
            isFriday: [false],
            strTimeOfDay: ["AM"]
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

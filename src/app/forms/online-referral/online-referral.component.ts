/* ============================================================
    The form uses NG FormBuilder.
============================================================ */
import { Component, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { constObjConfig } from "../../shared/config";
import { OnlineReferralService } from "./online-referral.service";

import { User } from "./user.interface";

// Enables jQuery
declare var $:any;

@Component({
    selector: 'app-online-referral',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <h1>Online Referral Form</h1>
                        <p>When your patients experience one or more of these symptoms, they should have a thorough evaluation by a dentist trained in TM and Sleep. We will be happy to assist you in diagnosis and treatment for possible Craniomandibular, Temporomandibular or Sleep Disordered Breathing/Apnea.</p>
                        <br />
                        <form [formGroup]="form" (ngSubmit)="mdSend(form)">
                            <div class="space-bottom-40">
                                <p class="boldTxt">Patient Information</p>
                                <p><input type="text" class="form" placeholder="Name:" formControlName="strPatient_Name" /></p>
                                <p><input type="text" class="form" placeholder="Address:" formControlName="strPatient_Address" /></p>
                                <p><input type="text" class="form" placeholder="Phone:" formControlName="strPatient_Phone" /></p>
                            </div>
                            
                            <div class="space-bottom-40">
                                <p class="boldTxt">Referred By</p>
                                <p><input type="text" class="form" placeholder="Name:" formControlName="strReferredBy_Name" /></p>
                                <p><input type="text" class="form" placeholder="Phone:" formControlName="strReferredBy_Phone" /></p>
                                <p><input type="text" class="form" placeholder="Date:" formControlName="strReferredBy_Date" /></p>
                                <p><input type="text" class="form" placeholder="Fax:" formControlName="strReferredBy_Fax" /></p>
                            </div>

                            <div class="space-bottom-40">
                                <label><input type="checkbox" value="Exam" formControlName="isReferredBy_Exam" /> Exam</label>
                                <label><input type="checkbox" value="2nd Option" formControlName="isReferredBy_2ndOption" /> 2nd Option</label>
                                <label><input type="checkbox" value="Send Report" formControlName="isReferredBy_SendReport" /> Send Report</label>
                                <label><input type="checkbox" value="Call Me" formControlName="isReferredBy_CallMe" /> Call Me</label>
                            </div>
                            
                            <div class="space-bottom-40">
                                <p class="boldTxt">Screening Form</p>
                                <p>For Patients with Head, Neck and Facial Pain &amp; Sleep Disordered Breathing/Apnea</p>
                                
                                <div class="space-bottom-5"><input type="checkbox" value="Primary headaches or migranes" formControlName="isHeadaches" /> Primary headaches or migranes</div>
                                <div class="space-bottom-5"><input type="checkbox" value="Snoring / Sleep Apnea" formControlName="isSnoring" /> Snoring / Sleep Apnea</div>
                                <div class="space-bottom-5"><input type="checkbox" value="Disturbed, restless sleeping" formControlName="isRestless" /> Disturbed, restless sleeping</div>
                                <div class="space-bottom-5"><input type="checkbox" value="CPAP Intolerance" formControlName="isCPAP" /> CPAP Intolerance</div>
                                <div class="space-bottom-5"><input type="checkbox" value="Daytime drowsiness" formControlName="isDrowsiness" /> Daytime drowsiness</div>
                                <div class="space-bottom-5"><input type="checkbox" value="Attention deficit in children" formControlName="isAttentionDeficit" /> Attention deficit in children</div>
                                <div class="space-bottom-5"><input type="checkbox" value="Earaches, stuffiness or ringing" formControlName="isEaraches" /> Earaches, stuffiness or ringing</div>
                                <div class="space-bottom-5"><input type="checkbox" value="Neck, shoulder, back pain or stiffness" formControlName="isNeckShoulderPain" /> Neck, shoulder, back pain or stiffness</div>
                                <div class="space-bottom-5"><input type="checkbox" value="Dizziness" formControlName="isDizziness" /> Dizziness</div>
                                <div class="space-bottom-5"><input type="checkbox" value="Dizziness" formControlName="isPainTMJ" /> Pain or soreness in TM joints</div>
                                <div class="space-bottom-5"><input type="checkbox" value="Clicking or grating sounds in TM joints" formControlName="isClickingTMJ" /> Clicking or grating sounds in TM joints</div>
                                <div class="space-bottom-5"><input type="checkbox" value="Limited mouth opening" formControlName="isLimitedMouth" /> Limited mouth opening</div>
                                <div class="space-bottom-5"><input type="checkbox" value="Locking jaw (opened or closed)" formControlName="isLockingJaw" /> Locking jaw (opened or closed)</div>
                                <div class="space-bottom-5"><input type="checkbox" value="Facial or undiagnosed teeth pain" formControlName="isFacialTeethPain" /> Facial or undiagnosed teeth pain</div>
                                <div class="space-bottom-5"><input type="checkbox" value="Difficulty swallowing" formControlName="isDifficultySwallowing" /> Difficulty swallowing</div>
                            </div>

                            <div class="space-bottom-40">
                                <re-captcha 
                                    (captchaResponse)="mdCaptchaHandle($event)" 
                                    (captchaExpired)="mdCaptchaExpired()"
                                    site_key="6LcsqyMTAAAAAMm-8ty3y6B4mye31TbEvi1Ku8LW"
                                ></re-captcha>
                            </div>
                            
                            <div><button id="formSubmit" type="submit" class="submitForm" [disabled]="form.invalid || this.strGoogleResponse == null">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: [OnlineReferralService]
})
export class OnlineReferralComponent {
    form: FormGroup;

    strAssetLocation: string;
    strImages: string;
    objUserDetails;
    strGoogleResponse: string;
    
    constructor(private onlineReferralService: OnlineReferralService, @Inject(FormBuilder) fb: FormBuilder, private router: Router) {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;

        this.form = fb.group({
            // Patient Information
            strPatient_Name: ["", Validators.required],
            strPatient_Address: [""],
            strPatient_Phone: ["", Validators.required],

            // Referred By
            strReferredBy_Name: ["", Validators.required],
            strReferredBy_Phone: ["", Validators.required],
            strReferredBy_Date: ["", Validators.required],
            strReferredBy_Fax: [""],
            isReferredBy_Exam: [false],
            isReferredBy_2ndOption: [false],
            isReferredBy_SendReport: [false],
            isReferredBy_CallMe: [false],

            // Screening Form
            isHeadaches: [false],
            isSnoring: [false],
            isRestless:  [false],
            isCPAP: [false],
            isDrowsiness: [false],
            isAttentionDeficit: [false],
            isEaraches: [false],
            isNeckShoulderPain: [false],
            isDizziness: [false],
            isPainTMJ: [false],
            isClickingTMJ: [false],
            isLimitedMouth: [false],
            isLockingJaw: [false],
            isFacialTeethPain: [false],
            isDifficultySwallowing: [false]
        }) // this.fb.group()
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

        this.onlineReferralService.mdSendData(this.objUserDetails)
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
} // AppComponent

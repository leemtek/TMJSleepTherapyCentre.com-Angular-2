import { Component } from "@angular/core";
import { FooterFormService } from "./footer-form.service";

// Enables jQuery
declare var $:any;

@Component({
    selector: "app-form-footer",
    template: `
        <form #footerForm="ngForm">
            <p class="space-bottom-10">
                <input type="text" name="name"  class="form" placeholder=" YOUR NAME *" 
                    [(ngModel)]="objUserDetails.strName"
                    required
                />
            </p>

            <p class="space-bottom-10">
                <input type="text" name="phone" class="form" placeholder=" TELEPHONE *" 
                    [(ngModel)]="objUserDetails.strPhone"
                    required
                />
            </p>

            <p class="space-bottom-10">
                <input type="text" name="email" class="form" placeholder=" EMAIL ADDRESS *" 
                    [(ngModel)]="objUserDetails.strEmail"
                    required
                />
            </p>

            <div class="space-bottom-10">
                <re-captcha 
                    (captchaResponse)="mdCaptchaHandle($event)" 
                    (captchaExpired)="mdCaptchaExpired()"
                    site_key="6LcsqyMTAAAAAMm-8ty3y6B4mye31TbEvi1Ku8LW"
                ></re-captcha>
            </div>
            
            <button type="submit" id="footerBtnSubmit" class="submitForm"
                [disabled]="footerForm.invalid || this.objUserDetails.googleResponse == null"
            >Submit</button>
        </form>
    `,
    styles: [``],
    providers: [FooterFormService]
})
export class FooterFormComponent {
    objUserDetails;
    
    constructor(private footerFormService: FooterFormService) {
        this.objUserDetails = footerFormService.objSenderInfo;
    } // constructor()

    // Send to REST endpoint.
    mdSend() {
        // Disable submit button and indicate "Please wait...".
        $('#footerBtnSubmit').text('Please Wait...');
        $('#footerBtnSubmit').removeClass('btn-default').addClass('btn-info');
        $("#footerBtnSubmit").prop('disabled', true);

        // Attempt to send email.
        this.footerFormService.mdSendData(this.objUserDetails)
            .subscribe(data => {
                if (data.sent === "yes") {
                    // Success
                    $('#footerBtnSubmit').text('Email Sent to Duane.  Thanks! :)');
                    $('#footerBtnSubmit').removeClass('btn-info').addClass('btn-success');
                    $("#footerBtnSubmit").prop('disabled', true);
                } else {
                    // Something went wrong.
                    $('#footerBtnSubmit').text('Please try again.');
                    $('#footerBtnSubmit').removeClass('btn-info').addClass('btn-danger');
                    $("#footerBtnSubmit").prop('disabled', false);
                } // else
            }) // subscribe()
        ; // sendEmailService.mdSendData()
    } // mdSend()

    // Handle the captcha response and save to objUserDetails.captchaResponse
    mdCaptchaHandle(strResponse: string): void {
        this.objUserDetails.googleResponse = strResponse;
    } // mdCaptchaHandle(response)

    // Handles expired captchas.
    mdCaptchaExpired(): void {
        this.objUserDetails.googleResponse = null;
    }
}
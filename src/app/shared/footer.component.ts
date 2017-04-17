import { Component } from '@angular/core';
import { constObjConfig } from "./config";

@Component({
    selector: 'app-footer',
    template: `
        <footer>
            <div class="footerPlacer group">
                <div class="col g4 footSpacer">

                    <h2>Send Us An E-Mail</h2>

                    <form method="post" name="footerForm" action="footer-to-email.php" id="footerForm">
                        <input id="du6axAQu" name="du6axAQu" type="text" value=""  />

                        <div id='footerForm_errorloc' class='error_strings'></div>

                        <p><input type="text" name="name"  class="form" placeholder=" YOUR NAME *"></p>
                        <br />

                        <p><input type="text" name="phoneNumber" class="form" placeholder=" TELEPHONE *" ></p>
                        <br />

                        <p><input type="text" name="email" class="form" placeholder=" EMAIL ADDRESS *"></p>
                        <br />
                        
                        <input type="submit" name='submit' value="SEND" class="submitForm">
                    </form>
                </div>

                <div class="col g4 footSpacer">
                    <h2>Connect</h2>

                    <p class="socialContainer">
                        <a href="http://www.tmjsleeptherapycentre.com/tmj-sleep-therapy/" target="_blank" class="socialIcon"><i class="fa fa-wordpress"></i></a>
                        <a href="https://www.facebook.com/tmjsleeptherapy" target="_blank" class="socialIcon"><i class="fa fa-facebook"></i></a>
                        <a href="https://plus.google.com/b/111000753015323874687/111000753015323874687/about" target="_blank" class="socialIcon"><i class="fa fa-google-plus"></i></a>
                    </p>

                    <p class="footerAdd">
                        TMJ &amp; Sleep Therapy Centre of SF<br />
                        450 Sutter St., Ste  1708<br />
                        San Francisco, CA 94108
                    </p>

                    <p class="footerPhone">
                        Call Today:<br />
                        <span class="fphone">
                            (415) 226-7274<br />
                            (844) TMJ-9111
                        </span>
                    </p>
                    <p id="copyright">
                        Copyright &copy; TMJ &amp; Sleep Therapy Centre - <a href="pdfs/Privacy Practices.pdf" target="_blank">Privacy Practice</a><br />
                        <a href="http://www.healthcarewebimage.com" target="_blank" id="copyright">
                            <img src="http://www.welcometohcwi.com/images/link icon.png" alt="Healthcare Web Image logo" width="16" height="15" border="0" />
                            Website Design and Marketing by HCWI
                        </a>
                    </p>
                </div><!-- /col -->

                <div class="col g4 footSpacer">
                    <h2>Visit</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d3153.0230320655305!2d-122.40769999999998!3d37.7895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!1i0!3e6!4m0!4m5!1s0x8085808ea60901ed%3A0xa9c733e821a32205!2s450+Sutter+Street%2C+San+Francisco%2C+CA+94108!3m2!1d37.7895!2d-122.40769999999999!5e0!3m2!1sen!2sus!4v1408385249577" width="100%" height="300" frameborder="0" style="border:0"></iframe>
                </div>
            </div><!-- /footerPlacer -->

            <!-- a helper script for vaidating the form-->
            <script language="JavaScript" src="{{ strAssetLocation }}/js/gen_validatorv31.js" type="text/javascript"></script>
            <script language="JavaScript">
                // Code for validating the form
                // Visit http://www.javascript-coder.com/html-form/javascript-form-validation.phtml
                // for details
                var frmvalidator  = new Validator("footerForm");
                frmvalidator.EnableOnPageErrorDisplaySingleBox();
                frmvalidator.EnableMsgsTogether();
                frmvalidator.addValidation("name","req","Please provide your name"); 
                frmvalidator.addValidation("phoneNumber","req","Please a phone number"); 
                frmvalidator.addValidation("email","req","Please provide your email"); 
                frmvalidator.addValidation("email","email","Please enter a valid email address"); 
            </script>
            <script>
                $('#footerForm').submit(function(){    
                        if ($('input#du6axAQu').val().length != 0) {
                            return false;
                        } 
                });
            </script>
        </footer>
    `,
    styles: [``],
    providers: []
})
export class FooterComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor() {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;
    } // constructor
} // AppComponent

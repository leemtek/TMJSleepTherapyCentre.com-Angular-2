import { Component } from '@angular/core';
import { AppService } from "../app.service";

@Component({
    selector: 'app-appointment',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g8">
                    <div class="conCon">
                        <h1>Schedule An Appointment</h1>
                        
                        <form method="post" name="contactform" action="form-to-email.php" id="contactform">
                            <p>
                                <input type="text" name="name" class="form" placeholder=" YOUR NAME *">
                            </p>
                            
                            <p>
                                <input type="text" name="phoneNumber" class="form" id="phoneNumber" placeholder=" TELEPHONE *">
                            </p>
                            
                            <p>
                                <input type="text" name="email" class="form" placeholder=" EMAIL ADDRESS *">
                            </p>
                            
                            <select name="contactMethod" id="contactMethod">
                                <option value="contact">METHOD OF CONTACT</option>
                                <option value="home">Home Phone</option>
                                <option value="work">Work Phone</option>
                                <option value="cell">Cell Phone</option>
                                <option value="email">E-Mail</option>
                            </select>

                            <p>
                                <textarea name="message" class="form2"></textarea>
                            </p>
                            
                            <p>
                                What is the best day for your appointment? (Please check all that apply)<br />
                                <label><input type="checkbox" name="bestDay[]" value="Monday"> Monday</label><br />
                                <label><input type="checkbox" name="bestDay[]" value="Tuesday"> Tuesday</label><br />
                                <label><input type="checkbox" name="bestDay[]" value="Wednesday"> Wednesday</label><br />
                                <label><input type="checkbox" name="bestDay[]" value="Thrusday"> Thrusday</label><br />
                                <label><input type="checkbox" name="bestDay[]" value="Friday"> Friday</label>
                            </p>
                            
                            <p>
                                What is the best time of day for your appt.?<br />
                                <label><input type="radio" name="RadioGroup1" value="AM" id="RadioGroup1_0"> AM</label><br />
                                <label><input type="radio" name="RadioGroup1" value="PM" id="RadioGroup1_1"> PM</label>
                            </p>
                            
                            <p class="pContent">* Indicates Response Required</p>
                            <input type="submit" name='submit' value="SEND" class="submitForm">
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
    providers: [AppService]
})
export class AppointmentComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(objAppService: AppService) {
        this.strImages = objAppService.objUrls.strImages;
        this.strAssetLocation = objAppService.objUrls.strMain;
    } // constructor
} // AppComponent

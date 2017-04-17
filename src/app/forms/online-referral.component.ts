import { Component } from '@angular/core';
import { constObjConfig } from "../shared/config";

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
                        <form name="contactform" id="contactform">
                            <div class="space-bottom-40">
                                <p class="boldTxt">Patient Information</p>
                                <p><input type="text" name="name" class="form" placeholder="Name:"></p>
                                <p><input type="text" name="address" class="form" placeholder="Address"></p>
                                <p><input type="text" name="phone" class="form" placeholder="Phone:"></p>
                            </div>
                            
                            <div class="space-bottom-40">
                                <p class="boldTxt">Referred By</p>
                                <p><input type="text" name="referName" class="form" required placeholder="Name:"></p>
                                <p><input type="text" name="referPhone" class="form" required placeholder="Phone:"></p>
                                <p><input type="text" name="referDate" class="form" required placeholder="Date:"></p>
                                <p><input type="text" name="referFax" class="form" required placeholder="Fax:"></p>
                            </div>

                            <div class="space-bottom-40">
                                <label><input type="checkbox" name="referOption[]" value="Exam" id="CheckboxGroup2_0"> Exam</label>
                                <label><input type="checkbox" name="referOption[]" value="2nd Option" id="CheckboxGroup2_1"> 2nd Option</label>
                                <label><input type="checkbox" name="referOption[]" value="Send Report" id="CheckboxGroup2_2"> Send Report</label>
                                <label><input type="checkbox" name="referOption[]" value="Call Me" id="CheckboxGroup2_3"> Call Me</label>
                            </div>
                            
                            <div class="space-bottom-40">
                                <p class="boldTxt">Screening Form</p>
                                <p>For Patients with Head, Neck and Facial Pain &amp; Sleep Disordered Breathing/Apnea</p>
                                <p>
                                    <label><input type="checkbox" name="tmjScreen[]" value="Primary headaches or migranes" id="CheckboxGroup1_0"> Primary headaches or migranes</label><br />
                                    <label><input type="checkbox" name="tmjScreen[]" value="Snoring / Sleep Apnea" id="CheckboxGroup1_1"> Snoring / Sleep Apnea</label><br />
                                    <label><input type="checkbox" name="tmjScreen[]" value="Disturbed, restless sleeping" id="CheckboxGroup1_2"> Disturbed, restless sleeping</label><br />
                                    <label><input type="checkbox" name="tmjScreen[]" value="CPAP Intolerance" id="CheckboxGroup1_3"> CPAP Intolerance</label><br />
                                    <label><input type="checkbox" name="tmjScreen[]" value="Daytime drowsiness" id="CheckboxGroup1_4"> Daytime drowsiness</label><br />
                                    <label><input type="checkbox" name="tmjScreen[]" value="Attention deficit in children" id="CheckboxGroup1_5"> Attention deficit in children</label><br />
                                    <label><input type="checkbox" name="tmjScreen[]" value="Earaches, stuffiness or ringing" id="CheckboxGroup1_6"> Earaches, stuffiness or ringing</label><br />
                                    <label><input type="checkbox" name="tmjScreen[]" value="Neck, shoulder, back pain or stiffness" id="CheckboxGroup1_7"> Neck, shoulder, back pain or stiffness</label><br />
                                    <label><input type="checkbox" name="tmjScreen[]" value="Dizziness" id="CheckboxGroup1_7"> Dizziness</label><br />
                                    <label><input type="checkbox" name="tmjScreen[]" value="Pain or soreness in TM joints" id="CheckboxGroup1_8"> Pain or soreness in TM joints</label><br />
                                    <label><input type="checkbox" name="tmjScreen[]" value="Clicking or grating sounds in TM joints" id="CheckboxGroup1_9"> Clicking or grating sounds in TM joints</label><br />
                                    <label><input type="checkbox" name="tmjScreen[]" value="Limited mouth opening" id="CheckboxGroup1_10"> Limited mouth opening</label><br />
                                    <label><input type="checkbox" name="tmjScreen[]" value="Locking jaw (opened or closed)" id="CheckboxGroup1_11"> Locking jaw (opened or closed)</label><br />
                                    <label><input type="checkbox" name="tmjScreen[]" value="Facial or undiagnosed teeth pain" id="CheckboxGroup1_12"> Facial or undiagnosed teeth pain</label><br />
                                    <label><input type="checkbox" name="tmjScreen[]" value="Difficulty swallowing" id="CheckboxGroup1_13"> Difficulty swallowing</label><br />
                                </p>
                            </div>
                            
                            <div><input type="submit" name='Submit' value="Submit" class="submitForm" /></div>
                        </form>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: []
})
export class OnlineReferralComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor() {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;
    } // constructor
} // AppComponent

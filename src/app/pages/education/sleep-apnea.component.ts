import { Component } from '@angular/core';
import { constObjConfig } from "../../shared/config";

@Component({
    selector: 'app-sleep-apnea',
    template: `
        <section id="wrapper">
            <div id="maincontent" class="group">
                <div class="col g12">
                    <div class="conCon">
                        <div class="tmjMedia">
                            <img src="{{ strImages }}/sleep-disorder-sublink-buttons.png" alt="tmj causes and symptoms" width="251" height="156" usemap="#Map4Map" />
                            <map name="Map4Map">
                                <area shape="rect" coords="2,3,245,47" onclick="document.getElementById('causes').scrollIntoView();">
                                <area shape="rect" coords="3,51,245,97" onclick="document.getElementById('symptoms').scrollIntoView();">
                                <area shape="rect" coords="2,102,244,147" onclick="document.getElementById('treatment').scrollIntoView();">
                            </map>
                        </div>
                        
                        <h1>Sleep Disorders</h1>
                        
                        <p>Sleep related breathing disorders are a group of disorders that affect our breathing while we are asleep, and are characterized by disruptions of normal breathing patterns that only occur during sleep. Therefore, the person with the disorder may be the last to know he or she has a problem. </p>
                        
                        <p>Approximately 40 million individuals are chronic sufferers, yet less than 10% have been diagnosed or are getting treated. If a breathing disorder goes left untreated the results can be life-threatening. This can include an increased risk of heart attack, cardiovascular disease, high blood pressure, diabetes, and work and driving related accidents. Sleep apnea patients may also suffer from memory impairment, difficulty concentrating and low energy. Obstructive sleep apnea syndrome (OSAS) in children is being increasingly recognized as a cause of attention and behavior problems.</p>
                        
                        <p>While there are many sleep disorders that affect both children and adults the most common is sleep apnea. There are two types of sleep apnea, <strong>Obstructive sleep apnea (OSA):</strong> The more common of the two forms of apnea, it is caused by a blockage of the airway, usually when the soft tissue in the back of the throat collapses during sleep. <strong>Central sleep apnea:</strong> Unlike OSA, the airway is not blocked, but the brain fails to signal the muscles to breathe due to instability in the respiratory control center. </p>
                    </div>

                    <div id="causes">
                        <h1>Sleep Disorder Causes</h1>
                        <p>
                            When you have obstructive sleep apnea, your throat collapses during sleep, blocking the airway and preventing air from getting to the lungs. Generally, your throat muscles keep the throat and airway open. The site of obstruction in most patients is the soft palate, extending to the region at the base of the tongue. There are no rigid structures, such as cartilage or bone, in this area to hold the airway open. During the day, muscles in the region keep the passage wide open. But as a person with OSA falls asleep, these muscles relax to a point where the airway collapses and becomes obstructed.
                        </p>
                        <blockquote class="space-bottom-20">
                            <p><strong>Sleep apnea can affect anyone at any age, even children. Risk factors for sleep apnea include:</strong></p>
                            <ul style="margin-top:0px; margin-left:30px;">
                                <li>Being overweight</li>
                                <li>Being over age 40</li>
                            </ul>
                            <ul style="margin-top:0px; margin-left:30px;">
                                <li>Having a large neck size (17 inches or greater in men and 16 inches or greater in women)</li>
                                <li>Having large tonsils, a large tongue, or a small jaw bone</li>
                            </ul>
                            <ul style="margin-top:0px; margin-left:30px;">
                                <li>Gastroesophageal reflux, or GERD</li>
                            </ul>
                            <ul style="margin-top:0px; margin-left:30px;">
                                <li>Nasal obstruction due to a deviated septum, allergies, or sinus problems</li>
                            </ul>
                        </blockquote>
                        <p>
                            Unlike adults, obstructive sleep apnea in children can be caused by obstructive tonsils and adenoids. This may be cured with surgery (tonsillectomy or adenoidectomy) though a full evaluation is necessary to confirm the root cause of the sleep disorder. A non-invasive treatment plan could prove more productive and provide better long-term results.
                        </p>
                    </div>

                    <div id="symptoms" class="space-top-40">
                        <h1>Sleep Disorder Signs and Symptoms</h1>
                        
                        <p>One of the most common signs of obstructive sleep apnea is loud and chronic (ongoing) snoring. Pauses may occur in the snoring. Choking or gasping may follow the pauses.</p>
                        
                        <p><strong>Less common symptoms of sleep apnea are:</strong></p>

                        <ul style="margin-top:0px; margin-left:30px;" class="space-bottom-20">
                            <li>Morning headaches</li>
                            <li>Insomnia</li>
                            <li>Trouble concentrating</li>
                            <li>Mood changes such as irritability, anxiety and depression</li>
                            <li>Forgetfulness</li>
                            <li>Increased heart rate and/or blood pressure</li>
                            <li>Decreased sex drive</li>
                            <li>Unexplained weight gain</li>
                            <li>Changes in urination</li>
                            <li>Frequent heartburn and heavy night sweat</li>
                        </ul>

                        <p>Higher risk adults include those who are older, obese, male, those with anatomic abnormalities of the upper airway; those with a family history of sleep apnea, frequently consume alcohol and/or sedatives, smoke and those who experience hypertension.</p>
                    </div>

                    <div id="treatment" class="space-top-40">
                        <h1>Sleep Disorder Diagonsis and Treatment</h1>
                        
                        <p>
                            While it is possible to use questionnaires and visual evaluation to screen for suspected obstructive sleep apnea (OSA), the primary method for diagnosing OSA at present is to have the patient undergo an overnight sleep study, known as polysomnography (PSG). This study measures and records a number of different physiologic variables during sleep such as airflow, oxygen levels, brain activity and respiratory effort.
                        </p>

                        <p>Once diagnosed, several treatment options exist for dealing with OSA:</p>
                        
                        <p>These include lifestyle changes such as an exercise and weight-loss regiment, medical intervention such as the addition of a sleeping device or a dental orthotic which can help to create long-term, healthy sleeping patterns. Nasal CPAP (continuous positive air pressure), CPAP or surgery.</p>
                    </div>
                </div>
            </div>
        </section><!-- /wrapper -->
    `,
    styles: [``],
    providers: []
})
export class SleepApneaComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor() {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;
    } // constructor
} // AppComponent

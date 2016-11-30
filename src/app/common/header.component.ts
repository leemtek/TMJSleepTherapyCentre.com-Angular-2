import { Component } from '@angular/core';
import { AppService } from "../app.service";

@Component({
    selector: 'app-header',
    template: `
        <!-- ========================================================
            Main Navigation Menu
        ======================================================== -->
        <header>
            <div class="header-bar">
                <div class="restrict">
                    <p><span>Call Today:</span> <a style="color:white;" href="tel:8448659111">(844) 865-9111</a> - <a style="color:white;" href="tel:4152267274">(415) 226-7274</a></p>
                </div>
            </div>

            <div class="headerPlacer">
                <div class="restrict">
                    <div class="head-btns">
                        <a href="tmj.php"><img src="{{ strImages }}/btn-1.png"></a>
                        <a href="sleep-disorders.php"><img src="{{ strImages }}/btn-2.png"></a>
                        <a href="new-patients.php"><img src="{{ strImages }}/btn-3.png"></a>
                        <a href="appointment.php"><img src="{{ strImages }}/btn-4.png"></a>
                    </div>

                    <div class="cycle-slideshow">
                        <img src="{{ strImages }}/head-1.png"  class="person-picture">
                        <img src="{{ strImages }}/head-2.png"  class="person-picture">
                        <img src="{{ strImages }}/head-3.png"  class="person-picture">
                    </div>
                </div>
            </div>
        </header>

        <nav>
            <ul>
                <li><a routerLink="/" class="mainNav">HOME</a></li>
                <li><a routerLink="/meet-dr" class="mainNav">MEET DR. ALKHOURY</a>
                </li>
                <li><a href="#" class="mainNav">SERVICES</a>
                    <ul>
                        <li><a routerLink="/tmj" class="secondnav">TMJ - Adults</a></li>
                        <li><a routerLink="/tmj-treatment-children" class="secondnav">TMJ  - Children</a></li>
                        <li><a routerLink="/sleep-disorders" class="secondnav">Sleep Disorders - Adults</a></li>
                        <li><a routerLink="/sleep-disorders-children" class="secondnav">Sleep Disorders - Children</a></li>
                        <li><a routerLink="/craniofacial" class="secondnav">Craniofacial pain</a></li>
                        <li><a routerLink="/facial-pain" class="secondnav">Facial Pain</a></li>
                        <li><a routerLink="/neck-jaw" class="secondnav">Neck & Jaw Pain</a></li>
                        <li><a routerLink="/orthodontics" class="secondnav">Complex Orthodontics</a></li>
                    </ul>
                </li>
                <li><a href="#" class="mainNav">EDUCATION</a>
                    <ul>
                        <li><a href="/tmj-symptoms" class="secondnav">TMJ & TMD</a></li>

                        <li><a href="/sleep-apnea" class="secondnav">Sleep Disorders</a></li>
                    </ul>
                </li>

                <li><a href="/testimonials" class="mainNav">PATIENT TESTIMONIALS</a></li>
                <li><a href="/locations" class="mainNav">LOCATIONS</a></li>
                <li><a href="/referral-form" class="mainNav">REFERRAL FORM</a></li>
                <li><a href="/contact" class="mainNav">CONTACT</a></li>
            </ul>
        </nav>

        <!-- ========================================================
            Mobile Navigation Section
        ======================================================== -->
        <div id="mobnav">
            <div class="mobnavcon">
                <a href="#">
                <div id="mobnavcontop" onClick="togglediv('navdrop')">
                    MENU
                </div>
                </a>

                <div id="navdrop" style="display: none;">
                    <a routerLink="/">
                        <div class="mobnavconbot">
                            HOME
                        </div>
                    </a>

                    <a routerLink="/meet-dr">
                        <div class="mobnavconbot" onClick="togglediv('navdrop2')">
                            MEET DR. ALKHOURY
                        </div>
                    </a>

                    <a href="#">
                        <div class="mobnavconbot" onClick="togglediv('navdrop3')">
                            SERVICES
                        </div>
                    </a>

                    <div id="navdrop3" style="display: none;">
                        <a href="/tmj">
                            <div class="mobnavconbot2">
                                TMJ - Adults
                            </div>
                        </a>

                        <a href="/tmj-treatment-children">
                            <div class="mobnavconbot2">
                                TMJ - Children
                            </div>
                        </a>

                        <a href="/sleep-disorders">
                            <div class="mobnavconbot2">
                                Sleep Disorders - Adults
                            </div>
                        </a>

                        <a href="/sleep-disorders-children">
                            <div class="mobnavconbot2">
                                Sleep Disorders - Children
                            </div>
                        </a>

                        <a href="/craniofacial">
                            <div class="mobnavconbot2">
                                Craniofacial Pain
                            </div>
                        </a>

                        <a href="/facial-pain">
                            <div class="mobnavconbot2">
                                Facial Pain
                            </div>
                        </a>

                        <a href="/neck-jaw">
                            <div class="mobnavconbot2">
                                Neck & Jaw Pain
                            </div>
                        </a>

                        <a href="/orthodontics">
                            <div class="mobnavconbot2">
                                Complex Orthodontics
                            </div>
                        </a>
                    </div>

                    <a href="#">
                        <div class="mobnavconbot" onClick="togglediv('navdrop4')">
                            EDUCATION
                        </div>
                    </a>

                    <div id="navdrop4" style="display: none;">
                        <a href="/tmj">
                            <div class="mobnavconbot2">
                                TMJ &amp; TMD
                            </div>
                        </a>

                        <a href="/sleep-apnea">
                            <div class="mobnavconbot2">
                                Sleep Disorders
                            </div>
                        </a>
                    </div>

                    <a href="/testimonials">
                        <div class="mobnavconbot">
                            PATIENT TESTIMONIALS
                        </div>
                    </a>

                    <a href="/locations">
                        <div class="mobnavconbot">
                            LOCATIONS
                        </div>
                    </a>

                    <a href="/referral-form">
                        <div class="mobnavconbot">
                            REFERRAL FORM
                        </div>
                    </a>

                    <a href="/contact">
                        <div class="mobnavconbot">
                            CONTACT
                        </div>
                    </a>
                </div>
            </div>
        </div>
    `,
    styles: [`
        /* ======================================================================
            Navigation
        ====================================================================== */
        nav ul li a {
            display: block;
            color: #fff;
            text-decoration: none;
            padding: 5px 23px!important;
            line-height: 30px;
            font-family: Arial, Helvetica, sans-serif!important;
        }

        @media all and (min-width: 769px) {

            nav ul ul {
                display: none;
            }

            nav ul li:hover > ul {
                display: block;
                max-width: 300px;
            }

            nav ul {
                padding: 0 0px;
                list-style: none;
                position: relative;
                width: 100%;
                margin: 0 auto;
                display: block;
                max-width: 760px;
            }
            nav ul:after {
                content: ""; clear: both; display: block;
            }

            nav ul li {
                float: left;
            }
            nav ul li:hover {
                background: #fff;

            }
            nav ul li:hover a {
                color:#F17A24;
            }

            nav ul li a {
                display: block;
                color: #fff;
                text-decoration: none;
                padding: 5px 9px!important;
                line-height: 30px;
                font-family: Arial, Helvetica, sans-serif!important;
                font-size: 12.25px;
            }


            nav ul ul {
                background: #357775; border-radius: 0px; padding: 0;
                position: absolute; top: 100%;
            }
            nav ul ul li {
                float: none;
                position: relative;
            }
            nav ul ul li a {
                padding: 15px 40px;
                color: #fff!important;
            }
            nav ul ul li a:hover {
                background: #fff;
                color:#F17A24!important;
            }
            nav ul ul ul {
                position: absolute; left: 100%; top:0;
            }
        }

        @media all and (min-width: 927px){
            nav ul li a {
                display: block;
                color: #fff;
                text-decoration: none;
                padding: 5px 10px!important;
                line-height: 30px;
                font-family: Arial, Helvetica, sans-serif!important;
                font-size: 15px;
            }
            nav ul {
                max-width: 1005px;
            }
        }
    `],
    providers: [AppService]
})
export class HeaderComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor(objAppService: AppService) {
        this.strImages = objAppService.objUrls.strImages;
        this.strAssetLocation = objAppService.objUrls.strMain;
    } // constructor
} // AppComponent

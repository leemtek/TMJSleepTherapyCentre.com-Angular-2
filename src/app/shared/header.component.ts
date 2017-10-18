import { Component } from '@angular/core';
import { constObjConfig } from "./config";

@Component({
    selector: 'app-header',
    template: `
        <!-- ========================================================
            Main Navigation Menu
        ======================================================== -->
        <header>
            <div class="header-bar">
                <div class="restrict">
                    <p><span class="space-left-10">Call Today: <a style="color:white;" href="tel:8448659111">(844) 865-9111</a></span> <span class="space-left-10">|</span> <span class="space-left-10"><a style="color:white;" href="tel:4152267274">(415) 226-7274</a></span> <span class="space-left-10">|</span> <span class="space-left-10"><a class="color-white" routerLink="/contact">Contact Us</a></span></p>
                </div>
            </div>

            <div class="headerPlacer">
                <div class="restrict">
                    <div class="head-btns">
                        <a routerLink="/tmj"><img src="{{ strImages }}/btn-1.png"></a>
                        <a routerLink="/sleep-disorders"><img src="{{ strImages }}/btn-2.png"></a>
                        <a routerLink="/new-patients"><img src="{{ strImages }}/btn-3.png"></a>
                        <a routerLink="/appointment"><img src="{{ strImages }}/btn-4.png"></a>
                    </div>

                    <div class="cycle-slideshow">
                        <img src="{{ strImages }}/head-1.png" class="person-picture">
                        <img src="{{ strImages }}/head-2.png" class="person-picture">
                        <img src="{{ strImages }}/head-3.png" class="person-picture">
                    </div>
                </div>
            </div>
        </header>

        <nav id="nav_desktop">
            <ul>
                <li><a routerLink="/" class="mainNav">HOME</a></li>

                <li><a routerLink="/meet-dr" class="mainNav">MEET DR. ALKHOURY</a></li>

                <li><a class="mainNav">SERVICES <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                    <ul>
                        <li><a routerLink="/tmj" class="secondnav">TMJ - Adults</a></li>
                        <li><a routerLink="/tmj-treatment-children" class="secondnav">TMJ  - Children</a></li>
                        <li><a routerLink="/sleep-disorders" class="secondnav">Sleep Disorders - Adults</a></li>
                        <li><a routerLink="/sleep-disorders-children" class="secondnav">Sleep Disorders - Children</a></li>
                        <li><a routerLink="/craniofacial" class="secondnav">Craniofacial pain</a></li>
                        <li><a routerLink="/facial-pain" class="secondnav">Facial Pain</a></li>
                        <li><a routerLink="/neck-jaw" class="secondnav">Neck & Jaw Pain</a></li>
                        <!-- <li><a routerLink="/orthodontics" class="secondnav">Complex Orthodontics</a></li> -->
                    </ul>
                </li>

                <li><a routerLink="/orthodontics" class="mainNav">ORTHODONTICS</a>

                <li><a class="mainNav">EDUCATION <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                    <ul>
                        <li><a routerLink="/tmj-symptoms" class="secondnav">TMJ & TMD</a></li>
                        <li><a routerLink="/sleep-apnea" class="secondnav">Sleep Disorders</a></li>
                    </ul>
                </li>

                <li><a routerLink="/testimonials" class="mainNav">PATIENT TESTIMONIALS</a></li>
                
                <li><a routerLink="/locations" class="mainNav">LOCATIONS</a>

                <li><a class="mainNav">FOR DOCTORS <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                    <ul>
                        <li><a routerLink="/referral-form" class="secondnav">Referral Form</a></li>
                        <li><a routerLink="/rsvp" class="secondnav">RSVP</a></li>
                    </ul>
                </li>

                <li><a routerLink="/contact" class="mainNav">CONTACT</a>
            </ul>
        </nav>

        <!-- ========================================================
            Mobile Navigation Section
        ======================================================== -->
        <div id="mobnav">
            <div class="mobnavcon">
                <a>
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

                    <!-- Meet Dr -->
                    <a routerLink="/meet-dr">
                        <div class="mobnavconbot">
                            MEET DR. ALKHOURY
                        </div>
                    </a>

                    <!-- Services -->
                    <a>
                        <div class="mobnavconbot" onClick="togglediv('navdrop3')">
                            SERVICES <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </a>

                    <div id="navdrop3" style="display: none;">
                        <a routerLink="/tmj">
                            <div class="mobnavconbot2">
                                TMJ - Adults
                            </div>
                        </a>

                        <a routerLink="/tmj-treatment-children">
                            <div class="mobnavconbot2">
                                TMJ - Children
                            </div>
                        </a>

                        <a routerLink="/sleep-disorders">
                            <div class="mobnavconbot2">
                                Sleep Disorders - Adults
                            </div>
                        </a>

                        <a routerLink="/sleep-disorders-children">
                            <div class="mobnavconbot2">
                                Sleep Disorders - Children
                            </div>
                        </a>

                        <a routerLink="/craniofacial">
                            <div class="mobnavconbot2">
                                Craniofacial Pain
                            </div>
                        </a>

                        <a routerLink="/facial-pain">
                            <div class="mobnavconbot2">
                                Facial Pain
                            </div>
                        </a>

                        <a routerLink="/neck-jaw">
                            <div class="mobnavconbot2">
                                Neck & Jaw Pain
                            </div>
                        </a>
                    </div>
                    
                    <a routerLink="/orthodontics">
                        <div class="mobnavconbot">
                            ORTHODONTICS
                        </div>
                    </a>

                    <a>
                        <div class="mobnavconbot" onClick="togglediv('navdrop4')">
                            EDUCATION <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </a>

                    <div id="navdrop4" style="display: none;">
                        <a routerLink="/tmj">
                            <div class="mobnavconbot2">
                                TMJ &amp; TMD
                            </div>
                        </a>

                        <a routerLink="/sleep-apnea">
                            <div class="mobnavconbot2">
                                Sleep Disorders
                            </div>
                        </a>
                    </div>

                    <a routerLink="/testimonials">
                        <div class="mobnavconbot">
                            PATIENT TESTIMONIALS
                        </div>
                    </a>

                    <a routerLink="/locations">
                        <div class="mobnavconbot">
                            LOCATIONS
                        </div>
                    </a>

                    <!-- For Doctors -->
                    <a>
                        <div class="mobnavconbot" onClick="togglediv('navdrop_fordoctors')">
                            FOR DOCTORS <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </a>

                    <div id="navdrop_fordoctors" style="display: none;">
                        <a routerLink="/referral-form">
                            <div class="mobnavconbot2">
                                Referral Form
                            </div>
                        </a>

                        <a routerLink="/rsvp">
                            <div class="mobnavconbot2">
                                RSVP
                            </div>
                        </a>
                    </div>

                    <!-- Contact -->
                    <a routerLink="/contact">
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
                height: auto;
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

        /* Change the size of the nav fonts so they fit on desktop view. */
        #nav_desktop ul li a.mainNav {
            font-size: 12px;
        }

        /* Appropriately fix new navdrop's for new menus on mobile view. */
        #navdrop_fordoctors {
            display: none;
            width: 100%;
            height: auto;
        }
    `],
    providers: []
})
export class HeaderComponent {
    strAssetLocation: string;
    strImages: string;
    
    constructor() {
        this.strImages = constObjConfig.assets + "/images";
        this.strAssetLocation = constObjConfig.assets;
    } // constructor
} // AppComponent

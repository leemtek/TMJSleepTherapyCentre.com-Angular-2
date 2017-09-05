import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable()
export class SeoService {
    constructor(
        private titleService: Title, 
        private metaService: Meta,
        private router: Router,
        private sanitizer: DomSanitizer
    ) {}

    /* ========================================================
        Your usual SEO related info.
    ======================================================== */
    public setTitle(strTitle: string) {
        this.titleService.setTitle(strTitle);
    } // setTitle()

    public setMetaDescription(strMetaDescription: string) {
        this.metaService.updateTag({
            content: strMetaDescription
        }, "name='description'" );
    } // setMetaDescription()

    /* ========================================================
        JSON-LD
    ======================================================== */
    /**
     * Default JSON-LD that tells visitors the contact info of TMJ.
     * @return {string} The <script> output with JSON-LD
     */
    public getDefaultJsonldData() {
        let strHTML, jsonld;

        jsonld = {
            "@context": "http://schema.org",
            "@type": "Organization",
            "url": this.router.url,
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+1-415-226-7274",
                    "contactType": "customer service"
                }
            ]
        } // jsonld

        strHTML = '<script type="application/ld+json">' + JSON.stringify(jsonld) + '</script>';
        strHTML  = this.sanitizer.bypassSecurityTrustHtml(strHTML);

        return strHTML;
    } // setJsonldData()
}
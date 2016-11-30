import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import "rxjs/Rx"; // used for .map

@Injectable()
export class AppService {
    private strPostUrl_footer: string = "https://leemtek.com/forms/dralkhoury/footer";
    
    objUrls = {
        strMain: "https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre",
        strImages: "https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/images"
    }; // objUrls
    
    constructor(private http: Http) {}
} // AppServices
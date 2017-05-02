import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";

// rxjs
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"; // used for .map

// Describe User Model
interface User {
    strName: string;
    strPhone: string;
    strEmail: string;
    googleResponse: string;
} // User

@Injectable()
export class FooterFormService {
    private strPostUrl: string = "https://leemtek.com/forms/duaneleem/footer";
    
    // Details of my visitor.
    objSenderInfo: User = {
        strName: "Duane Leem",
        strPhone: "925-526-5229",
        strEmail: "duane@leemtek.com",
        googleResponse: null
    }; // objSenderInfo
    
    constructor(private http: Http) {}
    
    // Send the email to REST API.
    mdSendData(objFinalSenderInfo: any) {
        const strBody = JSON.stringify(objFinalSenderInfo);
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post(this.strPostUrl, strBody, { headers: headers })
            .map((data: Response) => data.json())
        ; // this.http.post()
    }
}
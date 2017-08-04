import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { User } from "./user.interface";

// rxjs
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"; // used for .map

@Injectable()
export class AppointmentService {
    private strPostUrl: string = "https://us-central1-leemtek-secure-forms.cloudfunctions.net/tmjsleeptherapycentre/appointment";
    
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
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CfcHttpService {

    cfBaseUrl ="";         //'https://aegon.test.cord-finance.com/api/v1';
    cfBaseIdentityUrl = "";   //'https://aegon.test.identity.cord-finance.com/api';
    enableAuthentication = false;
    cfToken = "";
    headers: any;
    options: any;

    constructor(private _httpClient: HttpClient) {
        this.headers = new HttpHeaders();
        
        this.headers.append('Content-Type', 'application/json');
    }

    checkServiceIsAlive(text:string){
        return `Service is ${text}`;
    }

    setAutorisationHeader(){
        let httpHeaders = this.headers;
        
        if (this.cfToken){
            httpHeaders = this.headers.append('Authorization',  this.cfToken);
        }

        let options = {
            headers: httpHeaders
        }; 
        return options;
    }

    httpGet(endpoint: string = '', queryValues: string = ''): Promise<any> {
        console.log('httpGet');
        return this._httpClient.get(this.cfBaseUrl + '/' + endpoint + (queryValues ? ('/' + queryValues) : ''), this.setAutorisationHeader())
            .pipe(map(response=> response)).toPromise();
    }

    httpIdentityPost(endpoint: string = '', data: any): Promise<any> {
        return this._httpClient.post(this.cfBaseIdentityUrl + '/' + endpoint, data, this.setAutorisationHeader())
            .pipe(map(response=> response)).toPromise();
    }

    httpPost(endpoint: string = '', data: any): Promise<any> {

        return this._httpClient.post(this.cfBaseUrl + '/' + endpoint, data, this.setAutorisationHeader())
            .pipe(map(response => response)).toPromise();
    }

    httpDelete(endpoint: string = '', queryValues: string = ''): Promise<any> {
        return this._httpClient.delete(this.cfBaseUrl + '/' + endpoint + (queryValues ? ('/' + queryValues) : ''), this.setAutorisationHeader())
            .pipe(map(response => response)).toPromise();
    }
}

// export const Greeter = (name: string) => {
//   return `Hello ${name}`;
// };
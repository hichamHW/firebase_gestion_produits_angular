import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VirusCoronaService {

  constructor(private httpclient: HttpClient) { }

    Url = 'api/countries';

getAllData() {

   return this.httpclient.get<any[]>(`${this.Url}`);
}

}

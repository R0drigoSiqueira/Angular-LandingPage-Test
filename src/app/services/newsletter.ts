import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NewsletterResponse{
  message: string
}

@Injectable({
  providedIn: 'root',
})
export class Newsletter {
  private endpointUrl = 'http://localhost:3000/newsletter';
  constructor(private http: HttpClient){}

  sendData(name:string, email:string) : Observable<NewsletterResponse>{
    const data = {name, email};

    return this.http.post<NewsletterResponse>(this.endpointUrl, data);
  }
}

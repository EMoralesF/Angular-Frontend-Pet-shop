import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

//Lee texto del file txt:
export interface ResultJson{

}

@Injectable({
  providedIn: 'root'
})
export class DatosMascotasService {
  constructor(private http: HttpClient) { 
    //console.log("Bojack horseman likes this!");
  }
  getRuta(){
    return this.http.get('assets/datos_TB.txt', {responseType: 'text' as 'json'}/*'https://jsonplaceholder.typicode.com/posts'*/);
  }
}
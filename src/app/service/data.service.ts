import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getAllClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>('http://localhost:8000/api/clients');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  createClient(client: Client): Observable<Client> {
    console.log(`create ${client}`);

    return this.httpClient.post<Client>(
      'http://localhost:8000/api/clients/create',
      JSON.stringify(client),
      this.httpOptions
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getClientsData() {
    return this.httpClient.get('http://localhost:8000/api/clients');
  }
}

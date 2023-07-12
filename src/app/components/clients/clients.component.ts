import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getClientsData();
  }

  getClientsData() {
    this.dataService.getData().subscribe((response) => {
      this.clients = response;
    });
  }
}

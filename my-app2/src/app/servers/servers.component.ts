import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers = [];

  constructor() {
    this.servers = ['Server 1'];
   }

  ngOnInit(): void {
  }

}

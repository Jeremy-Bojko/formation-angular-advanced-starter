import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public headers: string[];
  public subCollection$: Subject<Client[]>;
  public stateClient = StateClient;

  constructor(private clientsService: ClientsService) { 
    this.headers = ['', '', 'Name', 'TotalCaHt', 'Tva', 'TotalTTC', 'State'];
    this.subCollection$ = this.clientsService.subCollection$;
    this.clientsService.refreshCollection();
    console.log('Composant list client instancié !');
  }
  
  ngOnInit(): void {
  }

  public onClickDeleteClient(client: Client): void {
    this.clientsService.deleteById(client.id).subscribe();
  }

  public onChangeUpdateState(client: Client, event: Event): void {
      const target = event.target as HTMLSelectElement;
      const state = target.value as StateClient;
      this.clientsService.changeState(client, state).subscribe((updatedClient: Client) => {
        client.state = updatedClient.state;
      });
  }
  
  ngOnDestroy(): void {
    console.log('Composant list client detruit ...');
  }

}

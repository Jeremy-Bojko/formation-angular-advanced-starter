import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ModalService } from 'src/app/core/services/modal.service';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {
  public newClient = new Client();

  constructor(
    private clientsService: ClientsService,
    private router: Router,
    private modalService: ModalService
    ) { }

  ngOnInit(): void {
  }

  public onSubmittedAddClient(client: Client): void {
    this.clientsService.add(client).subscribe(() => {
      this.modalService.displayModal('Ajout client', `${client.name} ajouté avec success ! 🎉`)
      this.router.navigate(['clients'])
    })
  }

}

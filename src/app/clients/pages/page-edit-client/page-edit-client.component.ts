import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {
  public clientToUpdate$!: Observable<Client>;

  constructor(
    private route: ActivatedRoute,
    private clientsService: ClientsService,
    private router: Router
    ) {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.clientToUpdate$ = this.clientsService.getById(id);
    })
   }

  ngOnInit(): void {
  }

  public onSubmittedUpdateClient(updatedClient: Client): void  {
    this.clientsService.update(updatedClient).subscribe(()=> {
      this.router.navigate(['clients']);
    })
  }

}

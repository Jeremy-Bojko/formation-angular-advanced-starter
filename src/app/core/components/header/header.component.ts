import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public version!: number;

  constructor(
      private versionService: VersionService,
      private modalService: ModalService
    ) {
    this.versionService.numVersion$.subscribe(numVersion => {
      this.version = numVersion;
    })
   }

  ngOnInit(): void {
  }

  public openModal(): void {

    this.modalService.displayModal('Test', `Test ajouté avec success ! 🎉`)
  }
}

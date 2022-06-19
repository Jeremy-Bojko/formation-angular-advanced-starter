import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ModalService } from '../../services/modal.service';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public version!: number;
  public availableLang!: any[];

  constructor(
      private versionService: VersionService,
      private modalService: ModalService,
      public translocoService: TranslocoService
    ) {
    this.versionService.numVersion$.subscribe(numVersion => {
      this.version = numVersion;
    })
    this.availableLang = this.translocoService.getAvailableLangs();
    console.log(this.availableLang);
   }

  ngOnInit(): void {
  }

  public openModal(): void {

    this.modalService.displayModal('Test', `Test ajouté avec success ! 🎉`)
  }

  public onChangeLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalService } from '../../services/modal.service';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public version!: number;
  public currentDate = new Date(); 
  public selectedLang: string; 

  constructor(
      private versionService: VersionService,
      private modalService: ModalService,
      public translate: TranslateService
    ) {
    this.versionService.numVersion$.subscribe(numVersion => {
      this.version = numVersion;
    })
    this.selectedLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe(
      (langParam: {lang: string, translations: any} ) => {
        this.selectedLang = langParam.lang;
      }
    )
    
   }

  ngOnInit(): void {
  }

  public openModal(): void {

    this.modalService.displayModal('Test', `Test ajouté avec success ! 🎉`)
  }
}

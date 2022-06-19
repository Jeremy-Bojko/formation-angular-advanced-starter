import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formation-angular-advanced-starter';
  private testPrivate = 'Ceci n\'est pas accessible dans le template'; 

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['fr', 'en'])
    this.translate.setDefaultLang('fr');
    // this.translate.use('fr');
    const browserLang = translate.getBrowserLang() ?? 'fr';
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}

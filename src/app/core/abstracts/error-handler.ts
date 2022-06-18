import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class ErrorHandler {
    protected handleError(error: HttpErrorResponse) {
        if(error.status === 0) {
            console.error('Une erreur est survenue', error.error);
        } else {
            console.error(`Le serveur distant a retourné le code suivant ${error.status } avec l'erreur suivante`, error.error);
        }

        return throwError(()=> 'Attention une petite erreur à été rencontrée');
    }
}

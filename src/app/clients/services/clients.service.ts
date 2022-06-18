import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, tap } from 'rxjs';
import { ErrorHandler } from 'src/app/core/abstracts/error-handler';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService extends ErrorHandler {
  private urlApi = environment.urlApi;
  public collection$: Observable<Client[]>;
  public subCollection$ = new Subject<Client[]>();

  constructor(private http: HttpClient) { 
    super();
    this.collection$ = this.http.get<Client[]>(`${this.urlApi}/clients`).pipe(
      map((listObj) => {
        return listObj.map((obj) => {
          return new Client(obj)
        })
      }),
      catchError(this.handleError)
    )

    this.http.get(`${this.urlApi}/clientsssde`).pipe(
      catchError(this.handleError)
    ).subscribe(
      (data)=> console.log(data)
    )
  }

  public refreshCollection(): void {
    this.collection$.subscribe((listClient: Client[]) => {
      this.subCollection$.next(listClient)
    })
  }

  public getById(clientId: number): Observable<Client> {
    return this.http.get<Client>(`${this.urlApi}/clients/${clientId}`);
  }

  public add(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}/clients`, client);
  }

  public update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}/clients/${client.id}`, client);
  }

  public changeState(client: Client, state: StateClient): Observable<Client> {
    const clientToUpdate = new Client({...client, state});
    return this.update(clientToUpdate);
  }

  public deleteById(clientId: number): Observable<Client> {
    return this.http.delete<Client>(`${this.urlApi}/clients/${clientId}`).pipe(
      tap(() => this.refreshCollection())
    );
  }


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

export interface Cluster {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClusterService {

  private clustersUrl = 'https://reqres.in/api';  // URL to web api
  constructor(
    private http: HttpClient
  ) { }

  /** GET obtenemos todos los clusters */
  getClusters (idUsuario = ''): Observable<Cluster[]> {
    if (idUsuario === '') {
      return this.http.get<Cluster[]>(this.clustersUrl + '/users?per_page=12');
    } else {
      return this.http.get<Cluster[]>(this.clustersUrl + '/users/' + idUsuario);
    }
  }

  /** POST: añadimos un nuevo cluster */
  addCluster (cluster: Cluster): Observable<Cluster> {
    return this.http.post<Cluster>(this.clustersUrl + '/users', cluster, httpOptions).pipe(
      tap((cluster: Cluster) => this.log(`added cluster w/ id=${cluster.id}`)),
      catchError(this.handleError<Cluster>('addCluster'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {

  }
}

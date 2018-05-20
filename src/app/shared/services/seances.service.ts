import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../core/base-api';
import {Observable} from 'rxjs/Observable';
import { Seances } from '../models/seances.model';
import { AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class SeancesService extends BaseApi {
  constructor (public http: HttpClient, 
    public authHttp: AuthHttp,
    public router: Router) {
    super(http, authHttp, router);
  }
  getSeances(filter: string = 'false'): Observable<Seances[]> {
      let data = {filter: filter};
      return this.get('seances', {params: data})
  }
  getSeance(id: number) {
    return this.get(`seances/${id}`);
  }
  getUserActualSeances(): Observable<Seances[]> {
    return this.authPost('getUserActualSeances');
  }  
  getUserHistorySeances(): Observable<Seances[]> {
    return this.authPost('getUserHistorySeances');
  }  
  addSeance(data: any) {
    return this.authPost('seances', data);
  }
  updateSeance(id: number, data: any) {
    return this.authPut(`seances/${id}`, data);
  }
  deleteSeance(id: number) {
    return this.authDelete(`seances/${id}`);
  }
  
}

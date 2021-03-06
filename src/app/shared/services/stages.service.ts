import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../core/base-api';
import {Observable} from 'rxjs/Observable';
import { Stages } from '../models/stages.model';
import { AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class StagesService extends BaseApi {
  constructor (public http: HttpClient, 
    public authHttp: AuthHttp,
    public router: Router) {
    super(http, authHttp, router);
  }
  getStages(): Observable<Stages[]> {
      return this.get('stages')
    }

  getStage(id): Observable<Stages> {
    return this.get(`stages/${id}`);
  }
  updateStage(id, data) {
    return this.authPut(`stages/${id}`, data);
  }
  addStage(data) {
    return this.authPost('stages', data);
  }
  deleteStage(id) {
    return this.authDelete(`stages/${id}`);
  }



}

import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  jsonDataResult: any;

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get<any[]>('assets/data.json');
  }
}

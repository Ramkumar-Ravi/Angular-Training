import { Injectable } from '@angular/core';
import {navigator} from '../data'

@Injectable({
  providedIn: 'root'
})
export class HeadService {

  constructor() { }
  getNavigatorValue():string[]
  {
    return navigator;
  }
}

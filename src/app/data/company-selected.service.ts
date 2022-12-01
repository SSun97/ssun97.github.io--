import { Injectable, OnDestroy } from '@angular/core';
import { CompanyCurrentData } from './company-current-data';

@Injectable({
  providedIn: 'root'
})
export class CompanySelectedService implements OnDestroy {

  companySelected: CompanyCurrentData[] = [];
  constructor() {
    console.log('CompanySelectedService created');
    
   }
   ngOnDestroy() {
    console.log('CompanySelectedService destroyed');
   }
}

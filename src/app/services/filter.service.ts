import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  data: any[] = [];
  error: string | null = null;
  labels: string[] = [];

  constructor(private dataService: DataService) { }
  loadData() {
    this.dataService.loadExcel().subscribe(
      (data) => {
        this.error = null;
        data.forEach( (el, index) => {
          if(!index){
            this.labels = el;
          } else{
            this.data.push({word: el[0], g_m: el[1], meaning:el[2], example: el[3], emotion: el[4], link: el[5], group: el[6], subgroup: el[7]})
          }
        })
      },
      (error) => {
        console.error('Error loading excel file:', error);
        this.error = error;
      }
    );
  }
  getWord(id:number){
    return this.data[id];
  }
  getData(){
    return this.data;
  }
  getLabels(){
    return this.labels;
  }
}

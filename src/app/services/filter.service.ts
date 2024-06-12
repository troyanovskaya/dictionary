import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  word = '';
  group = '';
  subgroup = '';
  data: any[] = [];
  error: string | null = null;
  labels: string[] = [];
  currentData: any[] = [];
  newSearch:EventEmitter<any> = new EventEmitter<any>();
  constructor(private dataService: DataService) { }
  subscribeForSearch(){
    this.newSearch.subscribe(searchObj => {
      if(searchObj.word){
        this.word = searchObj.word;
      }
      if(searchObj.group){
        this.group = searchObj.group;
      }
      if(searchObj.subgroup){
        this.subgroup = searchObj.subgroup;
      }
      if(!searchObj.subgroup && !searchObj.group && !searchObj.word){
        this.subgroup = searchObj.subgroup;
        this.group = searchObj.group;
      }
      this.searchFor();
    });
  }
  loadData() {
    this.subscribeForSearch();
    this.dataService.loadExcel().subscribe(
      (data) => {
        this.error = null;
        data.forEach( (el, index) => {
          if(!index){
            this.labels = el;
          } else{
            this.data.push({word: el[0], g_m: el[1], meaning:el[2], example: el[3], emotion: el[4], link: el[5], group: el[6] ? el[6]: '', subgroup: el[7] ? el[7]: '', id: el[8]});
            this.currentData.push({word: el[0], g_m: el[1], meaning:el[2], example: el[3], emotion: el[4], link: el[5], group: el[6] ? el[6]: '', subgroup: el[7] ? el[7]: '', id: el[8]});

          }
        })
      },
      (error) => {
        console.error('Error loading excel file:', error);
        this.error = error;
      }
    );
  }
  searchFor(){
    this.currentData = this.data.filter(el =>{
      return el.word.includes(this.word) && el.group.includes(this.group) && el.subgroup.includes(this.subgroup);
    })
  }
  getWord(id:number){
    console.log('ID ', id)
    return this.data.filter(el =>{
      return el.id == id})[0];
  }
  getData(){
    return this.data;
  }
  getLabels(){
    return this.labels;
  }
  clearSearch(){
    this.currentData = [];
    this.data.forEach( el =>{
      this.currentData.push(el);
    })
  }
}

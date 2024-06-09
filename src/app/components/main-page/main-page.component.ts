import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  labels: string[] = [];
  data: any[] = [];
  error: string | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.loadExcel().subscribe(
      (data) => {
        this.error = null;
        data.forEach( (el, index) => {
          if(!index){
            this.labels = el;
          } else{
            this.data.push({word: el[0], g_m: el[1], example:el[2], meaning: el[3], emotion: el[4], linl:el[5]})
          }
        })
      },
      (error) => {
        console.error('Error loading excel file:', error);
        this.error = error;
      }
    );
  }
}

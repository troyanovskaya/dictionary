import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-word-page',
  templateUrl: './word-page.component.html',
  styleUrls: ['./word-page.component.css']
})
export class WordPageComponent implements OnInit{
  id?:number;
  word?: any;
  interval: any;
  constructor(private route: ActivatedRoute, public filterService: FilterService){}
  ngOnInit(): void {
    if(this.filterService.getData().length == 0){
      this.filterService.loadData();
      this.interval = setInterval(this.timer.bind(this), 1000)
    } else{
      this.route.params.subscribe( params => {
        this.id = parseInt(params['id'])
        this.word = this.filterService.getWord(this.id);
        this.word.meaning = this.word.meaning.split(';');
      });
    }

  }
  timer(){
    this.route.params.subscribe( params => {
      this.id = parseInt(params['id'])
      this.word = this.filterService.getWord(this.id);
      this.word.meaning = this.word.meaning.split(';');
      clearInterval(this.interval);
    });
  }

}

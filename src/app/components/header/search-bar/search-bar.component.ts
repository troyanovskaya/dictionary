import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  input:string = '';
  search(){
    this.filterService.newSearch.emit({word: this.input.toLocaleLowerCase().trim(), group: '', subgroup: ''});
  }
  constructor( private filterService: FilterService, private router: Router){}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      this.input = '';
    });
  }

}

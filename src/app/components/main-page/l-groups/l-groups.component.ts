import { Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-l-groups',
  templateUrl: './l-groups.component.html',
  styleUrls: ['./l-groups.component.css']
})
export class LGroupsComponent{
constructor( private filterService: FilterService, private router: Router){}
chosen = 'всі';
visible = false;
groups = [{group: 'назви реалій життя під час війни', subgroups: ['дії /події, спрямовані на громадян України', 'дії /події спрямовані на ворогів']},
          {group: ' назви ворогів', subgroups: ['назви військових росіян', 'загальні назви росіян, цивільних росіян']},
          {group: 'назви воєнних дій /подій', subgroups: ['дії /події, спрямовані на громадян України', 'дії /події спрямовані на ворогів']},
          {group: 'назви військової техніки, озброєння, спорядження', subgroups: ['назви військової техніки, озброєння, спорядження ЗСУ', 'назви військової техніки росіян']},
          {group: 'назви політичних діячів, які впливають на російсько-українську війну', subgroups: ['назви українських політичних діячів', 'назви російських політичних діячів', 'назви західних політичних діячів']},
          {group: 'назви росії', subgroups: []},
          {group: 'назви колабораціоністів', subgroups: []},
          {group: 'меми', subgroups: []},
          {group: 'назви громадян України, які поводяться певним способом, та особливостей їхньої поведінки', subgroups: []},
          {group: 'назви громадян України', subgroups: ['назви українських воїнів', 'загальні назви українців, українських цивільних']},
          {group: 'назви поведінки політичних діячів, що пов’язана з війною в Україні', subgroups: []}
]
changeValue(el: string, group:boolean, subgroup:boolean){
  if(group){
    this.filterService.newSearch.emit({word: '', group: el.toLocaleLowerCase().trim(), subgroup: ''});
  } else if(subgroup){
    this.filterService.newSearch.emit({word: '', group: '', subgroup: el.toLocaleLowerCase().trim()});
  } else{
    this.filterService.newSearch.emit({word: '', group: '', subgroup: ''});
  }
  this.chosen = el;
  this.visible = !this.visible;

}

}

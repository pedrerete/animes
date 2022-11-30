import { Component, OnInit } from '@angular/core';
import * as data from "../../../assets/files/getAnimes.json"
@Component({

  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  title = 'pedrerete-animes';
  data: any = (data as any).default;
  animes:any
  animeElements: string[] = ['ID','Name','Status','Score']
  baseUrl = "https://myanimelist.net/anime/"
  constructor(){}
  ngOnInit(){
    this.animes = this.data.data
  }
}

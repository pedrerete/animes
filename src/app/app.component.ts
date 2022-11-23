import { Component, OnInit } from '@angular/core';
import * as data from '../assets/files/getAnimes.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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

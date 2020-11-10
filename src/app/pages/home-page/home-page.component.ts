import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { APICharactersService } from 'src/app/services/api-characters.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  characters: Array<Character> = [];

  constructor() {}

  ngOnInit(): void {}
}

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

  constructor(private charactersService: APICharactersService) {}

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters(): void {
    this.charactersService
      .getAllCharacters()
      .then((res) => {
        const { data } = res;
        this.characters = data.map((item) => ({
          ...item,
          haveLike: false,
        }));
      })
      .catch((err) => console.log(err));
  }
}

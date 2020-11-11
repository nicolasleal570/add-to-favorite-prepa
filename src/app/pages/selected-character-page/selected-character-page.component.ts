import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { APICharactersService } from 'src/app/services/api-characters.service';

@Component({
  selector: 'app-selected-character-page',
  templateUrl: './selected-character-page.component.html',
  styleUrls: ['./selected-character-page.component.scss'],
})
export class SelectedCharacterPageComponent implements OnInit {
  characterId = '';
  character: Character = null;

  constructor(
    private route: ActivatedRoute,
    private characterService: APICharactersService
  ) {}

  ngOnInit(): void {
    this.getUrlParams();
  }

  getUrlParams(): void {
    this.route.paramMap.subscribe((params) => {
      this.characterId = params.get('characterId');

      if (this.characterId) {
        this.characterService.getCharacter(this.characterId).then((res) => {
          this.character = res.data[0];
          console.log(res.data[0]);
        });
      }
    });
  }
}

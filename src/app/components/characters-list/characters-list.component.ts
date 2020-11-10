import { Component, Input, OnInit } from '@angular/core';
import { User } from 'firebase';
import { Character } from 'src/app/models/character';
import { Favorite } from 'src/app/models/favorite';
import { APICharactersService } from 'src/app/services/api-characters.service';
import { AuthService } from 'src/app/services/auth.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  private user: User = null;
  characters: Array<Character> = [];
  isLoading = false;

  constructor(
    private charactersService: APICharactersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getCurrentUser(): void {
    this.authService.getCurrentUser().subscribe((value) => {
      this.user = value;
    });
  }

  getAllCharacters(): void {
    this.isLoading = true;

    this.charactersService
      .getAllCharacters()
      .then((res) => {
        const { data } = res;
        this.characters = data.map((item) => ({
          ...item,
          haveLike: false,
        }));
        this.isLoading = false;
      })
      .catch((err) => console.log(err));
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { Character } from 'src/app/models/character';
import { APICharactersService } from 'src/app/services/api-characters.service';
import { AuthService } from 'src/app/services/auth.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesPageComponent implements OnInit {
  favorites: Array<Character> = [];
  user: User = null;
  isLoading = false;

  constructor(
    private favoriteService: FavoritesService,
    private authService: AuthService,
    private characterService: APICharactersService
  ) {}

  ngOnInit(): void {
    this.getMyFavorites();
  }

  getMyFavorites(): void {
    this.isLoading = true;
    this.authService.getCurrentUser().subscribe((user) => {
      if (user) {
        this.user = user;
        this.favoriteService.getListOfFavorites(user.uid).then((res) => {
          const arrOfIds = res.docs[0].get('favorites') as Array<number>;

          Promise.all(
            arrOfIds.map((item) =>
              this.characterService.getCharacter(item + '')
            )
          ).then((res) => {
            const allCharacters = res.map((item) => item.data[0]);
            this.favorites = allCharacters;
            this.isLoading = false;
          });
        });
      }
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character';
import { AuthService } from 'src/app/services/auth.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  @Input() character: Character;
  user: User = null;

  constructor(
    private favoritesService: FavoritesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      this.user = user;
      if (user) {
        this.favoritesService.getListOfFavorites(user.uid).then((res) => {
          if (res.docs.length > 0) {
            this.character.haveLike = (res.docs[0].get('favorites') as Array<
              number
            >).includes(this.character.char_id);
          }
        });
      } else {
        this.character.haveLike = false;
      }
    });
  }

  onLikeHandler(): void {
    if (this.user) {
      this.favoritesService
        .addToFavorite(this.user.uid, this.character.char_id)
        .then(() => {
          this.character.haveLike = !this.character.haveLike;
        });
    }
  }
}

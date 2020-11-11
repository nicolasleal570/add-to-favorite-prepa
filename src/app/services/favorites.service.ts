import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Favorite } from '../models/favorite';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesCollection: AngularFirestoreCollection<Favorite>;

  constructor(private db: AngularFirestore) {
    this.favoritesCollection = this.db.collection<Favorite>('favorites');
  }

  /**
   * GET THE LIST OF FAVORITES BY USER
   * @param userId
   */
  getListOfFavorites(
    userId: string
  ): Promise<
    firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
  > {
    return this.favoritesCollection.ref.where('userId', '==', userId).get();
  }

  /**
   * ADD CHARACTER TO A USER'S FAVORITE
   * @param userId
   * @param characterId
   */
  addToFavorite(userId: string, characterId: number): Promise<void> {
    return this.favoritesCollection.ref
      .where('userId', '==', userId)
      .get()
      .then((res) => {
        /**
         * Nunca ha agregado nada a sus favoritos
         */
        if (res.docs.length <= 0) {
          this.favoritesCollection
            .add({
              userId,
              favorites: [characterId],
            })
            .then((res) => {
              console.log(res.id);
            });
        } else {
          /**
           * Adjuntando el nuevo characterId a la lista de favoritos del usuario
           */
          let newFavorites = [...res.docs[0].get('favorites')];

          if (
            (res.docs[0].get('favorites') as Array<number>).includes(
              characterId
            )
          ) {
            newFavorites = newFavorites.filter((item) => item !== characterId);
          } else {
            newFavorites.push(characterId);
          }

          const favDoc: Favorite = {
            id: res.docs[0].id,
            userId: res.docs[0].get('userId'),
            favorites: newFavorites,
          };

          this.favoritesCollection.doc<Favorite>(favDoc.id).update({
            userId: favDoc.userId,
            favorites: favDoc.favorites,
          });
        }
      });
  }
}

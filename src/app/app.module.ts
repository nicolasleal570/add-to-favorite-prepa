import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase Imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
// Firebase Configuration
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GoogleLoginComponent } from './components/google-login/google-login.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { HeartIconComponent } from './components/heart-icon/heart-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FavoritesPageComponent,
    LoginPageComponent,
    NavbarComponent,
    GoogleLoginComponent,
    CharacterCardComponent,
    CharactersListComponent,
    HeartIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SelectedCharacterPageComponent } from './pages/selected-character-page/selected-character-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'characters/:characterId',
    component: SelectedCharacterPageComponent,
  },
  {
    path: 'favorites',
    canActivate: [AuthenticationGuard],
    component: FavoritesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Injectable } from '@angular/core';
import Axios, { AxiosResponse } from 'axios';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class APICharactersService {
  private API_URL = `https://www.breakingbadapi.com/api/characters`;

  constructor() {}

  getAllCharacters(): Promise<AxiosResponse<Array<Character>>> {
    return Axios.get(this.API_URL);
  }

  getCharacter(characterId: string): Promise<AxiosResponse<Character[]>> {
    return Axios.get(`${this.API_URL}/${characterId}`);
  }
}

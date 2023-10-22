import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://localhost:7107/api'; // Substitua pela URL correta da sua API

  constructor(private http: HttpClient) { }

  registerPokemon(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Pokemon`, data);
  }

  fetchPokemons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Pokemon`);
  }

  fetchPokemonDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Pokemon/${id}`);
  }

  updatePokemon(data: any, id: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/Pokemon/${id}`, data);
  }

  deletePokemon(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Pokemon/${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemonService'; // Importe seu serviço aqui
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  pokemons: any[] = [];
  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.fetchPokemons();
  }

  async fetchPokemons() {
    try {
      this.pokemonService.fetchPokemons().subscribe({
        next: (response: any) => {
          this.pokemons = response;
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }


  async handleRemovePokemon(id: string) {
    try {
      const updatedPokemons = this.pokemons.filter(pokemon => pokemon.id !== id);
      this.pokemonService.deletePokemon(id).subscribe(() => {
        this.pokemons = updatedPokemons;
        alert('Pokemon deletado com sucesso');
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleNavigateEditPage(id: string) {
    this.router.navigate(['/edit', id]);
  }
}

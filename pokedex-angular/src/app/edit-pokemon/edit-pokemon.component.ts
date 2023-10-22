import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemonService';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {
  pokemonForm: FormGroup;
  pokemonId: string;
  pokemon: any;

  constructor(private formBuilder: FormBuilder, private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) {
    this.pokemonId = this.route.snapshot.params['id'];;
    this.pokemonForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.fetchPokemonDetails();
  }

  fetchPokemonDetails() {
    this.pokemonService.fetchPokemonDetails(this.pokemonId).subscribe({
      next: (response: any) => {
        this.pokemon = response;
        this.pokemonForm.patchValue({
          name: this.pokemon.name,
          type: this.pokemon.type,
          description: this.pokemon.description
        });
      },
      error: (error: any) => {
        console.error('Erro ao buscar detalhes do Pokémon', error);
      }
    });
  }

  onSubmit() {
    if (this.pokemonForm.valid) {
      this.pokemonService.updatePokemon(this.pokemonForm.value, this.pokemonId).subscribe(
        (response: any) => {
          if (response.id) {
            alert('Pokemon atualizado com sucesso!');
            this.pokemonForm.reset();
          }
        },
        (error: any) => {
          console.error('Erro ao atualizar o Pokémon', error);
        }
      );
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}

import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from '../services/pokemonService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-pokemon',
  templateUrl: './register-pokemon.component.html',
  styleUrls: ['./register-pokemon.component.css']
})

export class RegisterPokemonComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private pokemonService: PokemonService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() { }
  onSubmit() {
    if (this.registerForm.valid) {
      this.pokemonService.registerPokemon(this.registerForm.value).subscribe(
        (response) => {
          if (response.id) {
            alert('Pokemon registrado com sucesso!');
            this.registerForm.reset();
          }
        },
        (error) => {
          console.error('Erro ao registrar o Pokemon', error);
        }
      );
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}

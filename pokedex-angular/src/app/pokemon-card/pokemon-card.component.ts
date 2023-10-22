import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon: any;
  @Output() handleRemovePokemon = new EventEmitter<string>();
  @Output() handleEditPokemon = new EventEmitter<string>();

  constructor() { }

  removePokemon(id: string) {
    this.handleRemovePokemon.emit(id);
  }

  editPokemon(id: string) {
    this.handleEditPokemon.emit(id);
  }
}

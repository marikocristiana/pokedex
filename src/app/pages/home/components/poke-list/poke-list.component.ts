import { Component, OnInit } from '@angular/core';

// services
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public pokelist: Array<any> = [];
  public pokedex:  Array<any> = [];
  public error:    boolean    = false;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.getPokedex().subscribe({
      next:  (res) => {
        this.pokedex  = res.results;
        this.pokelist = res.results;
      },
      error: (err) => {
        this.error = true;
      }
    })
  }

  public findPokemon(event: string) {
    this.pokelist = this.pokedex.filter((pokemon: any) => {
      return pokemon.name.startsWith(event.toLowerCase());
    });
  }

}
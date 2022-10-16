import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public pokeList: Array<any> = [];
  public pokedex:  Array<any> = [];
  public error:    boolean    = false;

  constructor(
    private pokeApiService: PokeApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pokeApiService.getPokedex().subscribe({
      next:  (res) => {
        this.pokedex  = res.results;
        this.pokeList = res.results;
      },
      error: (err) => {
        this.error = true;
      }
    })
  }

  public findPokemon(event: string): void {
    this.pokeList = this.pokedex.filter((pokemon: any) => {
      return pokemon.name.startsWith(event.toLowerCase());
    });
  }

  public detailPokemon(pokemon: string): void {
    this.router.navigate(['/details/', pokemon]);
  }

}
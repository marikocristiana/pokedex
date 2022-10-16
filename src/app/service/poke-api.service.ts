import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private pokedexUrl: string = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100";
  private pokemonUrl: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) { }

  public getPokedex(): Observable<any> {

    return this.http.get<any>(this.pokedexUrl).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((pokemon: any) => {
          this.http.get(pokemon.url).subscribe(
            res => pokemon.details = res
          );
        });
      })
    );
  }

  public getPokemon(id: string): Observable<any> {
    return this.http.get<any>(`${this.pokemonUrl}/${id}`).pipe(
      tap(res => res),
      tap(res => {
        [res].map((pokemon: any) => {
          this.http.get(pokemon.species.url).subscribe(
            (res: any) => pokemon.japanese = res.names[9].name
          )
        })
      })
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public pokeDetails: Array<any> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.pokeApiService.getPokemon(id).subscribe({
      next:  (res) => this.pokeDetails = [res],
      error: (err) => err
    });
  }

  public generalPokemon(): void {
    this.router.navigate(['']);
  }

}

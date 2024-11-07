import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/filmes.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})


export class CategoriasComponent implements OnInit {
  categorias: string[] = [];
  filmes: any[] = [];
  categoriaSelecionada: string | null = null;

  constructor(private filmesService: FilmesService) {}

  ngOnInit(): void {
    this.carregarCategorias();
  }

  carregarCategorias(): void {
    this.filmesService.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  selecionarCategoria(categoria: string): void {
    this.categoriaSelecionada = categoria;
    this.filmesService.getFilmesPorCategoria(categoria).subscribe((data) => {
      this.filmes = data;
    });
  }
}

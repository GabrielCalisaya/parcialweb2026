import { Component, ChangeDetectorRef } from '@angular/core';
import { ParcialApi } from '../../services/parcial-api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parcial-page',
  imports: [FormsModule],
  templateUrl: './parcial-page.html',
  styleUrl: './parcial-page.css',
})
export class ParcialPage {
  nombre: string = '';
  recetas: Array<any> = [];
  traduccion: string = '';

  constructor(private parcialApi: ParcialApi, private cdRef: ChangeDetectorRef) {}

  buscar() {
    this.parcialApi.searchRecipes(this.nombre).subscribe({
      next: (data) => {
        console.log(data);
        this.recetas = data;
        this.cdRef.detectChanges();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  traducir(descripcion: string) {
    this.parcialApi.translateText(descripcion).subscribe({
      next: (data) => {
        console.log(data);
        this.traduccion = data.data.translations.translatedText;
        this.cdRef.detectChanges();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}

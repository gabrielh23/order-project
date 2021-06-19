import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ["./selecao.component.css"]
})
export class SelecaoComponent {

  @Input()
  titulo: string = "";
  @Input()
  opcoes: string[] = [];
  @Input()
  escolhaAte: number = 1;

  opcoesSelecionadas: string[] = [];


  constructor() { }

  seleciona(opcao: string) {
    if (this.escolhaAte === 1) {
      this.opcoesSelecionadas = [opcao];
    } else {
      const idx = this.opcoesSelecionadas.indexOf(opcao);
      if (idx === -1) {
        this.opcoesSelecionadas.push(opcao);
      } else {
        this.opcoesSelecionadas.splice(idx, 1);
      }
    }
  }
  estaDesabilitado(opcao: string) : boolean {
    const idx = this.opcoesSelecionadas.indexOf(opcao);
    return this.escolhaAte > 1 &&
      idx === -1 && 
      this.opcoesSelecionadas.length >= this.escolhaAte;
  }
}

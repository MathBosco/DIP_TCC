
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Aulas } from 'src/app/model/Aulas';
import { ArmazenamentoAula } from './../../model/armazenamento-aula';

@Injectable({
  providedIn: 'root'
})
export class AulasStorageService {

  constructor(private storage: Storage) { }

  //Função Inserir
  inserir(valor: Aulas) {
    let novaChave = 0; //Declara uma Nova Chave
    return (
      this.storage.forEach((value: Aulas, key: string, iterationNumber: number) => {
        novaChave = iterationNumber;
      })

        .then(() => {
          return this.storage.set(String(novaChave + 1), valor);
        })
    );
  }

  //Função Alterar
  alterar(chave: string, valor: Aulas) {
    return this.storage.set(chave, valor);
  }

  //Função Excluir
  excluir(chave: string) {
    //Após ser informada a chave exclui a Aula
    return this.storage.remove(chave);
  }

  //Função Mostrar Aulas
  listarAulas() {
    const listaAulas: ArmazenamentoAula[] = [];
    return (
      this.storage.forEach((valor: Aulas, chave: string, iterationNumber: number) => {
        const aulas = new ArmazenamentoAula();
        aulas.chave = chave;
        aulas.valor = valor;

        listaAulas.push(aulas);
      })

        .then(() => {
          //Retorna a promise Finalizada
          return Promise.resolve(listaAulas);
        })

        //Caso de erro
        .catch(error => {
          return Promise.reject(error);
        })
    );
  }
}

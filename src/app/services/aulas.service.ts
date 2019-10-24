import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Aulas } from '../interfaces/aulas';

@Injectable({
  providedIn: 'root'
})
export class AulasService {
  private aulasCollection: AngularFirestoreCollection<Aulas>;

  constructor(private afs: AngularFirestore) {
    this.aulasCollection = this.afs.collection<Aulas>('Products');
  }

  getAulas() {


  }

  addAula(aulas : Aulas){

  }
  
  getAula(id : string){

  }

  updateAula(aulas : Aulas , aula : Aulas){

  }

  deleteAula(id : string) {

  }
}

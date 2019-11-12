import { Aulas } from './../interfaces/aulas';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AulasService {
  private aulasCollection: AngularFirestoreCollection<Aulas>;

  constructor(private afs: AngularFirestore) {
    this.aulasCollection = this.afs.collection<Aulas>('Aulas');
  }

  getAulas() {
    return this.aulasCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    )
  }

  addAula(aulas: Aulas) { }

  getAula(id: string) { }

  updateAulas(id: string, aulas: Aulas) { }

  deleteAula(id: string) { }
}

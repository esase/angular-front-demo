import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from './model/item.model';

@Injectable()
export class ItemService {

  constructor(
    private db: AngularFirestore, 
  ) { }

  getItems(): Observable<Item[]> {
    return this.db.collection(
      'items', 
    ).valueChanges({ 
      idField: 'id' 
     }) as Observable<Item[]>;
  }
}

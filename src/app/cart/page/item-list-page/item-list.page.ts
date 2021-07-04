import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from '../../service/item.service';
import { Item } from '../../service/model/item.model';

@Component({
  selector: 'app-item-list-page',
  templateUrl: './item-list-page.html',
})
export class ItemListPage implements OnInit {
  itemList$: Observable<Item[]>;

  constructor(
    private itemService: ItemService,
  ) {
    this.itemList$ = this.itemService.getItems();
  }

  ngOnInit(): void {}
}

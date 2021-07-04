import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../service/model/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input()
  items: Item[] = [];

  ngOnInit(): void {}
}

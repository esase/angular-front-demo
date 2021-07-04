import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListPage } from './page/item-list-page/item-list.page';
import { ItemService } from './service/item.service';

const routes: Routes = [
  { 
    path: '', 
    component: ItemListPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    ItemService,
  ],
})
export class CartsRoutingModule { }

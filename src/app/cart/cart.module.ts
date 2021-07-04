import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbInputModule } from '@nebular/theme';

import { CartsRoutingModule } from './cart-routing.module';
import { ItemListPage } from './page/item-list-page/item-list.page';
import { LoadingComponent } from './component/loading/loading.component';
import { ItemListComponent } from './component/item-list/item-list.component';

@NgModule({
  declarations: [
    ItemListPage,
    ItemListComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    CartsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
  ]
})
export class CartsModule { }

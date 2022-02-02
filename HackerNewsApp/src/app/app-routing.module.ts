import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'item', component: ItemComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
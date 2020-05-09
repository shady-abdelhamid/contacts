import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsManagerComponent } from './contacts-manager.component';

const routes: Routes = [
  { path: ':id', component: ContactsManagerComponent },
  { path: '', component: ContactsManagerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsManagerRoutingModule { }

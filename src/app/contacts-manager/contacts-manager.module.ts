import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsManagerRoutingModule } from './contacts-manager-routing.module';
import { ContactsManagerComponent } from './contacts-manager.component';


@NgModule({
  declarations: [ContactsManagerComponent],
  imports: [
    CommonModule,
    ContactsManagerRoutingModule
  ]
})
export class ContactsManagerModule { }

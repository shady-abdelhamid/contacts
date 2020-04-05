import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactsManagerRoutingModule } from './contacts-manager-routing.module';
import { ContactsManagerComponent } from './contacts-manager.component';


@NgModule({
  declarations: [ContactsManagerComponent],
  imports: [
    CommonModule,
    ContactsManagerRoutingModule,
    FlexLayoutModule,
  ]
})
export class ContactsManagerModule { }

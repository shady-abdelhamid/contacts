import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactsManagerRoutingModule } from './contacts-manager-routing.module';
import { ContactsManagerComponent } from './contacts-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [ContactsManagerComponent],
  imports: [
    CommonModule,
    ContactsManagerRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class ContactsManagerModule { }

import {NgModule} from '@angular/core';
import {AppSharedModule} from '@app/shared/app-shared.module';
import { CreatePersonModalComponent } from './Create/create-person-modal.component';
import { EditPersonModalComponent } from './EDIT/edit-person-modal.component';


import {PhoneBookRoutingModule} from './phonebook-routing.module';
import {PhoneBookComponent} from './phonebook.component';


@NgModule({
    declarations: [PhoneBookComponent,CreatePersonModalComponent,EditPersonModalComponent],
    imports: [AppSharedModule, PhoneBookRoutingModule]
})
export class PhoneBookModule {}

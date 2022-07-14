import { Component, ViewChild, Injector, ElementRef, Output, EventEmitter } from '@angular/core';

import { EditPersoneInput, PersonServiceProxy } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/common/app-component-base';
import { finalize } from 'rxjs/operators';
import { ModalDirective } from 'ngx-bootstrap/modal';



@Component({
    selector: 'editPersonModal',
    templateUrl: './edit-person-modal.component.html'
})
export class EditPersonModalComponent extends AppComponentBase {

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('modal' , { static: false }) modal: ModalDirective;
    @ViewChild('nameInput' , { static: false }) nameInput: ElementRef;

    person: EditPersoneInput = new EditPersoneInput();

    active: boolean = false;
    saving: boolean = false;

    constructor(
        injector: Injector,
        private _personService: PersonServiceProxy
    ) {
        super(injector);
    }

    show(): void {
        this.active = true;
        this.person = new EditPersoneInput();
        this.modal.show();
    }

    onShown2(): void {
        this.nameInput.nativeElement.focus();
    }

    Update(): void {
        this.saving = true;
        this._personService.edit(this.person)
            .pipe(finalize(() => this.saving = false))
            .subscribe(() => {
                this.notify.info(this.l('SavedSuccessfully'));
                this.close();
                this.modalSave.emit(this.person);
            });
    }

    close(): void {
        this.modal.hide();
        this.active = false;
    }
}

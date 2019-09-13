import {Component, Input, OnInit} from '@angular/core';
import {User} from '../services/user';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
    selector: 'app-user-editor',
    templateUrl: './user-editor.component.html',
    styleUrls: ['./user-editor.component.scss'],
    providers: [UserService]
})
export class UserEditorComponent implements OnInit {
    userForm: FormGroup;
    @Input()
    user: User;

    constructor(
        private activeModal: NgbActiveModal,
        private formBuilder: FormBuilder,
        private userService: UserService
    ) {
        // this.userForm = this.formBuilder.group({
        //     name: '',
        //     email: '',
        //     phone: '',
        //     website: ''
        // });

    }


    ngOnInit(): void {
        // this.initForm();
    }

    onSave() {
        console.log('Save called!');
        // TODO replace this with this.userService.persist(this.user)
        if (this.user.id == null || this.user.id < 1) {
            this.userService.create(this.user).subscribe((user) => {
                // tslint:disable-next-line:no-console
                console.log('Create branch');
                console.log({newUser: user});
                this.activeModal.close(user);
            });
        } else {
            // tslint:disable-next-line:no-console
            console.log('Update branch');
            this.userService.update(this.user).subscribe((user) => {
                console.log({editedUser: user});
                this.activeModal.close(user);
            });
        }

    }

    private initForm() {
        // this.userForm.controls.name.setValue(this.user.name);
        // this.userForm.controls.email.setValue(this.user.email);
        // this.userForm.controls.phone.setValue(this.user.phone);
        // this.userForm.controls.website.setValue(this.user.website);
        console.log({message: 'Got user', user: this.user});

    //     this.userForm = this.formBuilder.group({
    //         name: this.user.name,
    //         email: this.user.email,
    //         phone: this.user.phone,
    //         website: this.user.website
    //     });
    }


}

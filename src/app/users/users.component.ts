import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../services/user';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserEditorComponent} from './user-editor.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [UserService]
})
export class UsersComponent implements OnInit {

    users: User[] = [];
    newUser: User = new User();

    constructor(private userService: UserService, private modalService: NgbModal) {
    }

    ngOnInit() {
        this.refreshUsers();
    }

    onCreateUser(user: User) {
        this.userService.create(user).subscribe((createdUser) => {
            this.users = this.users.concat(createdUser);
        });
    }

    onUpdateUser(user: User) {
        this.userService.update(user).subscribe((updatedUser) => {
            const index = this.users.indexOf(user);
            this.users[index] = updatedUser;
        });
    }

    onDeleteUser(user: User) {
        if (confirm('You are about to delete the user' + user.name + '\n! Are you sure?')) {
            this.userService.delete(user.id).subscribe((_) => {
                this.users = this.users.filter((u) => u.id !== user.id);
            });
        }
    }

    doCreate() {
        const modalRef = this.modalService.open(UserEditorComponent);
        modalRef.componentInstance.user = new User();
    }

    doEdit(user: User) {
        const modalRef = this.modalService.open(UserEditorComponent);
        modalRef.componentInstance.user = user;
        modalRef.result.then((editedUser) => {
            const userIndex = this.users.findIndex(u => u.id === editedUser.id);
            this.users[userIndex] = editedUser;
        });
    }

    private refreshUsers() {
        this.userService.list().subscribe((users) => {
            this.users = users;
        });
    }

}

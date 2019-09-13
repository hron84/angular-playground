import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';


@Injectable()
export class UserService {
    private baseUrl = 'https://jsonplaceholder.typicode.com';
    private resources = 'users';

    constructor(protected httpClient: HttpClient) {}


    list(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.baseUrl}/${this.resources}`);
    }
    show(id: number): Observable<User> {
        return this.httpClient.get<User>(`${this.baseUrl}/${this.resources}/${id}`);
    }

    public create(user: User) {
        return this.httpClient.post<User>(`${this.baseUrl}/${this.resources}`, user);
    }

    public update(user: User) {
        return this.httpClient.put<User>(`${this.baseUrl}/${this.resources}/${user.id}`, user);
    }

    delete(id: number) {
        return this.httpClient.delete(`${this.baseUrl}/${this.resources}/${id}`);
    }

}

import {BrowserModule, Meta, Title} from '@angular/platform-browser';
import {NgModule, ElementRef} from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavigationComponent} from './navigation/navigation.component';

import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {UsersComponent} from './users/users.component';
import {UserEditorComponent} from './users/user-editor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent,
        FooterComponent,
        AboutComponent,
        UsersComponent,
        UserEditorComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [
        Title,
        Meta,
        Location
    ],
    bootstrap: [AppComponent],
    entryComponents: [UserEditorComponent]
})
export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { ExamplesPageComponent } from './examples-page/examples-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopbarComponent } from './common/components/topbar/topbar.component';

@NgModule({
    declarations: [
        AppComponent,
        ExamplesPageComponent,
        StartPageComponent,
        PageNotFoundComponent,
        TopbarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}

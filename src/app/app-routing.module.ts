import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {StartPageComponent} from "./start-page/start-page.component";
import {ExamplesPageComponent} from "./examples-page/examples-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
    {path: '', redirectTo: 'start', pathMatch: 'full'},
    {path: 'start', component: StartPageComponent},
    {path: 'examples-page', component: ExamplesPageComponent},

    /*404 page not found */
    {path: '**', redirectTo: 'page-not-found', pathMatch: 'full'},
    {path: 'page-not-found', component: PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {

}
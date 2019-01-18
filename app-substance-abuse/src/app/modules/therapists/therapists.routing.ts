import { Routes, RouterModule } from "@angular/router";
import { ViewContainerComponent } from "../therapists/view-container/view-container.component";
import { NgModule } from "@angular/core";

const therapistsRoutes: Routes = [
    { path: '', component: ViewContainerComponent }
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(therapistsRoutes)]
})
export class TherapistsRoutingModule {

}
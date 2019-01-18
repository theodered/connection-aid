import { Routes, Router, RouterModule } from "@angular/router";
import { ViewContainerComponent } from "../rehab/view-container/view-container.component";
import { NgModule } from "@angular/core";

const rehabRouting: Routes = [
    { path: '', component: ViewContainerComponent}
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(rehabRouting)]
})
export class RehabRoutingModule {
    
}
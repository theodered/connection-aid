import { Routes, RouterModule } from "@angular/router";
import { ViewContainerComponent } from "../stories/view-container/view-container.component";
import { NgModule } from "@angular/core";

const storyRoutes: Routes = [
    { path: 'main', component: ViewContainerComponent }
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(storyRoutes)]
})
export class StoryRoutingModule {

}
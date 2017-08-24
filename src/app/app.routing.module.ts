import {Component, NgModule, Type} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CampaignComponent} from './components/campaign/campaign.component';

export interface RouteGroup {
    group: string,
    path: string,
    component
}



let routes: Routes = [    { path: '', component: CampaignComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

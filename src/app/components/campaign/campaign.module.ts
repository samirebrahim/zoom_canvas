import { BrowserModule } from '@angular/platform-browser';
import { ZoomableCanvasComponent } from './../zoomablecanvas/zoomablecanvas.component';
import { FormsModule } from '@angular/forms';

import {NgModule} from "@angular/core";
import {CampaignComponent} from "./campaign.component";

@NgModule({
  declarations: [
    CampaignComponent,
    ZoomableCanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  ]
})
export class CampaignModule {}

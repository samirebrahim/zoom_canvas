import { Component } from "@angular/core";

@Component({
    templateUrl: './campaign.component.html',
      styleUrls: ['./campaign.component.css']

})
export class CampaignComponent {

    private top: number;
    private bottom: number;
    private left: number;
    private right: number;
    private centerX: number;
    private centerY: number;
    private zoomLevel: number = 0;
    private maxZoom: number = 5;
    private canvasWidth: number;
    private canvasHeight: number;
    private image: HTMLImageElement = new Image();
     constructor() {
        this.image.src = 'assets/images/svg/worldmap.svg';
    }
}

import { AppRoutingModule } from './app.routing.module';
import { CampaignModule } from './components/campaign/campaign.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
        AppRoutingModule,
    CampaignModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

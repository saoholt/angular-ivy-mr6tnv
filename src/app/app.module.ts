import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StartpageComponent } from './startpage/startpage.component';
import { ProximitySearchComponent } from './proximity-search/proximity-search.component';
import { ListOfSpacesComponent } from './list-of-spaces/list-of-spaces.component';
import { SelectedSpaceComponent } from './selected-space/selected-space.component';
import { FinalPageComponent } from './final-page/final-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    StartpageComponent,
    ProximitySearchComponent,
    ListOfSpacesComponent,
    SelectedSpaceComponent,
    FinalPageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

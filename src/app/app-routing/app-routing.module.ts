import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalPageComponent } from '../final-page/final-page.component';
import { ListOfSpacesComponent } from '../list-of-spaces/list-of-spaces.component';
import { ProviderComponent } from '../provider/provider.component';
import { ProximitySearchComponent } from '../proximity-search/proximity-search.component';
import { SelectedSpaceComponent } from '../selected-space/selected-space.component';
import { StartpageComponent } from '../startpage/startpage.component';

const routes: Routes = [
  { path: 'startpage', component: StartpageComponent },
  { path: 'proxy', component: ProximitySearchComponent },
  { path: 'list', component: ListOfSpacesComponent },
  { path: 'selected/:id', component: SelectedSpaceComponent },
  { path: 'final', component: FinalPageComponent },
  { path: 'provider', component: ProviderComponent},
  { path: '', redirectTo: '/startpage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  // { path: 'burbank', component: BurbankComponent },
  // { path: 'chicago', component: ChicagoComponent },
  // { path: 'dallas', component: DallasComponent },
  // { path: 'sanJose', component: SanJoseComponent },
  // { path: 'seattle', component: SeattleComponent },
  // { path: 'washington', component: WashingtonComponent },
  { path: ':city', component: CityComponent },
  { path: '', pathMatch: 'full', redirectTo: '/burbank' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

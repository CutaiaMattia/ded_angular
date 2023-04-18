import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { TalentsComponent } from './components/talents/talents.component';

const routes: Routes = [
  {path:"" , component:HomepageComponent},
  {path:"wizard", component:WizardComponent},
  {path: "wizard/spells/lvl/:lvl", component:WizardComponent},
  {path:"talents", component:TalentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

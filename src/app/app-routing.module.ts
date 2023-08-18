import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { TalentsComponent } from './components/talents/talents.component';
import { RegisterComponent } from './components/register/register.component';
import { ManualsComponent } from './components/manuals/manuals.component';
import { ToolsComponent } from './components/tools/tools.component';
import { AttackComponent } from './components/tools/attack/attack.component';

const routes: Routes = [
  {path: "", component:HomepageComponent},
  {path:"register" , component:RegisterComponent},
  {path:"tools" , component:ToolsComponent},
  {path:"attack" , component:AttackComponent},
  {path:"manuals" , component:ManualsComponent},
  {path:"mago", component:WizardComponent},
  {path: "mago/incantesimi/lvl/:lvl", component:WizardComponent},
  {path:"talents", component:TalentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WizardComponent } from './components/wizard/wizard.component';

const routes: Routes = [
  {path:"" , component:HomepageComponent},
  {path:"wizard", component:WizardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

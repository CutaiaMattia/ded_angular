import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { HeaderComponent } from './components/header/header.component';
import { TalentsComponent } from './components/talents/talents.component';
import { ManualsComponent } from './components/manuals/manuals.component';
import { ToolsComponent } from './components/tools/tools.component';
import { AttackComponent } from './components/tools/attack/attack.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WizardComponent,
    HeaderComponent,
    TalentsComponent,
    RegisterComponent,
    ManualsComponent,
    ToolsComponent,
    AttackComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

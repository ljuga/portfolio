import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import {ProgressBarAngularModule} from "progress-bar-angular"



@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    ExperienciaComponent,
    SobremiComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ProgressBarAngularModule
  ],
  exports: [
    HeaderComponent,
    ExperienciaComponent,
    SobremiComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent
  ]

})
export class CoreModule { }

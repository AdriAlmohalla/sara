import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';
import { PageAtencionTempranaComponent } from './page-atencion-temprana/page-atencion-temprana.component';
import { PageContactoComponent } from './page-contacto/page-contacto.component';
import { PageFisioterapiaComponent } from './page-fisioterapia/page-fisioterapia.component';
import { PageLogopediaComponent } from './page-logopedia/page-logopedia.component';
import { PagePedagogiaComponent } from './page-pedagogia/page-pedagogia.component';
import { PagePsicologiaComponent } from './page-psicologia/page-psicologia.component';
import { PageTarifasComponent } from './page-tarifas/page-tarifas.component';
import { PageTerapiaOcupacionalComponent } from './page-terapia-ocupacional/page-terapia-ocupacional.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: MainComponent},
  {path: 'quienes-somos', component: PageAboutUsComponent},
  {path: 'logopedia', component: PageLogopediaComponent},
  {path: 'pedagogia', component: PagePedagogiaComponent},
  {path: 'psicologia', component: PagePsicologiaComponent},
  {path: 'fisioterapia', component: PageFisioterapiaComponent},
  {path: 'atencion-temprana', component: PageAtencionTempranaComponent},
  {path: 'terapia-ocupacional', component: PageTerapiaOcupacionalComponent},
  {path: 'tarifas', component: PageTarifasComponent},
  {path: 'contacto', component: PageContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

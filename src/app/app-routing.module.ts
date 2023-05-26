import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'unab',
    loadChildren: () => import('./unab/unab.module').then( m => m.UNABPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'esfe',
    loadChildren: () => import('./esfe/esfe.module').then( m => m.EsfePageModule)
  },
  {
    path: 'uma',
    loadChildren: () => import('./uma/uma.module').then( m => m.UmaPageModule)
  },
  {
    path: 'ciencias-economicas-uma',
    loadChildren: () => import('./ciencias-economicas-uma/ciencias-economicas-uma.module').then( m => m.CienciasEconomicasUMAPageModule)
  },
  {
    path: 'ciencias-y-humanidades-uma',
    loadChildren: () => import('./ciencias-y-humanidades-uma/ciencias-y-humanidades-uma.module').then( m => m.CienciasYHumanidadesUMAPageModule)
  },
  {
    path: 'ciencias-juridicas-uma',
    loadChildren: () => import('./ciencias-juridicas-uma/ciencias-juridicas-uma.module').then( m => m.CienciasJuridicasUMAPageModule)
  },
  {
    path: 'pos-grado-uma',
    loadChildren: () => import('./pos-grado-uma/pos-grado-uma.module').then( m => m.PosGradoUMAPageModule)
  },
  {
    path: 'unab-ciencias-humanisticas',
    loadChildren: () => import('./unab-ciencias-humanisticas/unab-ciencias-humanisticas.module').then( m => m.UnabCienciasHumanisticasPageModule)
  },
  {
    path: 'unab-ciencias-salud',
    loadChildren: () => import('./unab-ciencias-salud/unab-ciencias-salud.module').then( m => m.UnabCienciasSaludPageModule)
  },
  {
    path: 'unab-ciencias-economicas',
    loadChildren: () => import('./unab-ciencias-economicas/unab-ciencias-economicas.module').then( m => m.UnabCienciasEconomicasPageModule)
  },
  {
    path: 'tecnico-software-esfe',
    loadChildren: () => import('./tecnico-software-esfe/tecnico-software-esfe.module').then( m => m.TecnicoSoftwareESFEPageModule)
  },
  {
    path: 'tecnico-electrico-esfe',
    loadChildren: () => import('./tecnico-electrico-esfe/tecnico-electrico-esfe.module').then( m => m.TecnicoElectricoESFEPageModule)
  },
  {
    path: 'tecnico-turismo-esfe',
    loadChildren: () => import('./tecnico-turismo-esfe/tecnico-turismo-esfe.module').then( m => m.TecnicoTurismoESFEPageModule)
  },
  {
    path: 'tecnico-mercadeo-esfe',
    loadChildren: () => import('./tecnico-mercadeo-esfe/tecnico-mercadeo-esfe.module').then( m => m.TecnicoMercadeoESFEPageModule)
  },
  {
    path: 'uso',
    loadChildren: () => import('./uso/uso.module').then( m => m.UsoPageModule)
  },
  {
    path: 'uso-ing-ycn',
    loadChildren: () => import('./uso-ing-ycn/uso-ing-ycn.module').then( m => m.UsoIngYcnPageModule)
  },
  {
    path: 'uso-eco-y-cs',
    loadChildren: () => import('./uso-eco-y-cs/uso-eco-y-cs.module').then( m => m.UsoEcoYCsPageModule)
  },
  {
    path: 'uso-cien-juridicas',
    loadChildren: () => import('./uso-cien-juridicas/uso-cien-juridicas.module').then( m => m.UsoCienJuridicasPageModule)
  },  {
    path: 'unab-lic-administracion',
    loadChildren: () => import('./unab-lic-administracion/unab-lic-administracion.module').then( m => m.UnabLicAdministracionPageModule)
  },
  {
    path: 'unab-contaduria',
    loadChildren: () => import('./unab-contaduria/unab-contaduria.module').then( m => m.UnabContaduriaPageModule)
  },
  {
    path: 'unab-lic-computacion',
    loadChildren: () => import('./unab-lic-computacion/unab-lic-computacion.module').then( m => m.UnabLicComputacionPageModule)
  },
  {
    path: 'unab-lic-mercadeo',
    loadChildren: () => import('./unab-lic-mercadeo/unab-lic-mercadeo.module').then( m => m.UnabLicMercadeoPageModule)
  },
  {
    path: 'unab-lic-turismo',
    loadChildren: () => import('./unab-lic-turismo/unab-lic-turismo.module').then( m => m.UnabLicTurismoPageModule)
  },
  {
    path: 'unab-tec-computacion',
    loadChildren: () => import('./unab-tec-computacion/unab-tec-computacion.module').then( m => m.UnabTecComputacionPageModule)
  },
  {
    path: 'unab-tec-mercadeo',
    loadChildren: () => import('./unab-tec-mercadeo/unab-tec-mercadeo.module').then( m => m.UnabTecMercadeoPageModule)
  },
  {
    path: 'unab-tec-turismo',
    loadChildren: () => import('./unab-tec-turismo/unab-tec-turismo.module').then( m => m.UnabTecTurismoPageModule)
  },
  {
    path: 'unab-lic-salud',
    loadChildren: () => import('./unab-lic-salud/unab-lic-salud.module').then( m => m.UnabLicSaludPageModule)
  },
  {
    path: 'unab-tec-salud',
    loadChildren: () => import('./unab-tec-salud/unab-tec-salud.module').then( m => m.UnabTecSaludPageModule)
  },
  {
    path: 'unab-lic-comunicacion',
    loadChildren: () => import('./unab-lic-comunicacion/unab-lic-comunicacion.module').then( m => m.UnabLicComunicacionPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

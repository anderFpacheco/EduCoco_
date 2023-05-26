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
    path: 'lic-adm-empresa-uma',
    loadChildren: () => import('./lic-adm-empresa-uma/lic-adm-empresa-uma.module').then( m => m.LicAdmEmpresaUmaPageModule)
  },
  {
    path: 'lic-conta-uma',
    loadChildren: () => import('./lic-conta-uma/lic-conta-uma.module').then( m => m.LicContaUmaPageModule)
  },
  {
    path: 'lic-merca-uma',
    loadChildren: () => import('./lic-merca-uma/lic-merca-uma.module').then( m => m.LicMercaUmaPageModule)
  },
  {
    path: 'lic-info-uma',
    loadChildren: () => import('./lic-info-uma/lic-info-uma.module').then( m => m.LicInfoUmaPageModule)
  },
  {
    path: 'tec-conta-uma',
    loadChildren: () => import('./tec-conta-uma/tec-conta-uma.module').then( m => m.TecContaUmaPageModule)
  },
  {
    path: 'tec-soft-uma',
    loadChildren: () => import('./tec-soft-uma/tec-soft-uma.module').then( m => m.TecSoftUmaPageModule)
  },
  {
    path: 'lic-juridi-uma',
    loadChildren: () => import('./lic-juridi-uma/lic-juridi-uma.module').then( m => m.LicJuridiUmaPageModule)
  },
  {
    path: 'maestria-uma',
    loadChildren: () => import('./maestria-uma/maestria-uma.module').then( m => m.MaestriaUmaPageModule)
  },
  {
    path: 'lic-ingles-uma',
    loadChildren: () => import('./lic-ingles-uma/lic-ingles-uma.module').then( m => m.LicInglesUmaPageModule)
  },
  {
    path: 'lic-lenguaje-uma',
    loadChildren: () => import('./lic-lenguaje-uma/lic-lenguaje-uma.module').then( m => m.LicLenguajeUmaPageModule)
  },
  {
    path: 'lic-psico-uma',
    loadChildren: () => import('./lic-psico-uma/lic-psico-uma.module').then( m => m.LicPsicoUmaPageModule)
  },
  {
    path: 'prof-parvula-uma',
    loadChildren: () => import('./prof-parvula-uma/prof-parvula-uma.module').then( m => m.ProfParvulaUmaPageModule)
  },
  {
    path: 'prof-sociales-uma',
    loadChildren: () => import('./prof-sociales-uma/prof-sociales-uma.module').then( m => m.ProfSocialesUmaPageModule)
  },


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

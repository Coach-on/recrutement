import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


import { AProposComponent } from './a-propos/a-propos.component';
import { ProfilCandidatComponent } from './profil-candidat/profil-candidat.component';
import { AccueilCComponent } from './accueil-c/accueil-c.component';
import { ContactezNousComponent } from './contactez-nous/contactez-nous.component';
import { ConnexionCandidatComponent } from './connexion-candidat/connexion-candidat.component';
import { InscriptionCandidatComponent } from './inscription-candidat/inscription-candidat.component';
import { RecuperationMdpComponent } from './recuperation-mdp/recuperation-mdp.component';
import { PageDeChoixIComponent } from './page-de-choix-i/page-de-choix-i.component';
import { PageDeChoixCComponent } from './page-de-choix-c/page-de-choix-c.component';
import { CreationMdpComponent } from './creation-mdp/creation-mdp.component';

const routes: Routes = [

  {path: '' , component: AccueilCComponent},
  {path: 'accueil-c' , component: AccueilCComponent},
  {path: 'a-propos' , component: AProposComponent},
  {path: 'contactez-nous' , component: ContactezNousComponent},
  {path: 'connexion-candidat' , component: ConnexionCandidatComponent},
  {path: 'inscription-candidat' , component: InscriptionCandidatComponent},
  {path: 'recuperation-mdp' , component: RecuperationMdpComponent},
  {path: 'page-de-choix-i' , component: PageDeChoixIComponent},
  {path: 'page-de-choix-c' , component: PageDeChoixCComponent},
  {path: 'creation-mdp' , component: CreationMdpComponent},
  {path: 'recuperation-mdp' , component: RecuperationMdpComponent},
  {path: 'profil-candidat' , component: ProfilCandidatComponent},
];

@NgModule({
  imports: [
  BrowserModule,
  RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}

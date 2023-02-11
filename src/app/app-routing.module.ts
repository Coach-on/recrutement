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
import { InscriptionRecruteurE1Component } from './inscription-recruteur-e1/inscription-recruteur-e1.component';
import { InscriptionRecruteurE2Component } from './inscription-recruteur-e2/inscription-recruteur-e2.component';
import { ConnexionRecruteurComponent } from './connexion-recruteur/connexion-recruteur.component';
import { AbonnementE2Component } from './abonnement-e2/abonnement-e2.component';
import { TdbRecruteurComponent } from './tdb-recruteur/tdb-recruteur.component';

const routes: Routes = [

  {path: '' , component: AccueilCComponent},
  {path: 'accueil-c' , component: AccueilCComponent},
  {path: 'a-propos' , component: AProposComponent},
  {path: 'contactez-nous' , component: ContactezNousComponent},
  {path: 'connexion-candidat' , component: ConnexionCandidatComponent},
  {path: 'inscription-candidat' , component: InscriptionCandidatComponent},
  {path: 'inscription-recruteur-e1' , component: InscriptionRecruteurE1Component},
  {path: 'recuperation-mdp' , component: RecuperationMdpComponent},
  {path: 'page-de-choix-i' , component: PageDeChoixIComponent},
  {path: 'page-de-choix-c' , component: PageDeChoixCComponent},
  {path: 'creation-mdp' , component: CreationMdpComponent},
  {path: 'recuperation-mdp' , component: RecuperationMdpComponent},
  {path: 'profil-candidat' , component: ProfilCandidatComponent},
  {path: 'connexion-recruteur' , component: ConnexionRecruteurComponent},
  {path: 'inscription-recruteur-e2' , component: InscriptionRecruteurE2Component},
  {path: 'abonnement-e2' , component: AbonnementE2Component},
  {path: 'tdb-recruteur' , component: TdbRecruteurComponent}

];

@NgModule({
  imports: [
  BrowserModule,
  RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}

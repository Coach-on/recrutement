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

const routes: Routes = [

  {path: '' , component: AccueilCComponent},
  {path: 'accueil-c' , component: AccueilCComponent},
  {path: 'a-propos' , component: AProposComponent},
  {path: 'contactez-nous' , component: ContactezNousComponent},
  {path: 'connexion-candidat' , component: ConnexionCandidatComponent},
  {path: 'inscription-candidat' , component: InscriptionCandidatComponent},
  {path: 'recuperation-mdp' , component: RecuperationMdpComponent},

];

@NgModule({
  imports: [
  BrowserModule,
  RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

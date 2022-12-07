import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionCandidatComponent } from './inscription-candidat/inscription-candidat.component';
import { ConnexionCandidatComponent } from './connexion-candidat/connexion-candidat.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { RecuperationMdpComponent } from './recuperation-mdp/recuperation-mdp.component';
import { CreationMdpComponent } from './creation-mdp/creation-mdp.component';
import { QuizComponent } from './quiz/quiz.component';
import { Quiz4Component } from './quiz4/quiz4.component';
import { Quiz5Component } from './quiz5/quiz5.component';
import { Quiz6Component } from './quiz6/quiz6.component';
import { PageDeChoixIComponent } from './page-de-choix-i/page-de-choix-i.component';
import { PageDeChoixCComponent } from './page-de-choix-c/page-de-choix-c.component';
import { AccueilCComponent } from './accueil-c/accueil-c.component';
import { CandidatsFavorisRComponent } from './candidats-favoris-r/candidats-favoris-r.component';
import { ProgrammerEntretienComponent } from './programmer-entretien/programmer-entretien.component';
import { ProfilRecruteurComponent } from './profil-recruteur/profil-recruteur.component';
import { OffreRecentComponent } from './offre-recent/offre-recent.component';
import { ToutesLesOffresComponent } from './toutes-les-offres/toutes-les-offres.component';
import { ProgressionComponent } from './progression/progression.component';
import { TdbRecruteurComponent } from './tdb-recruteur/tdb-recruteur.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionCandidatComponent,
    ConnexionCandidatComponent,
    AProposComponent,
    RecuperationMdpComponent,
    CreationMdpComponent,
    QuizComponent,
    Quiz4Component,
    Quiz5Component,
    Quiz6Component,
    PageDeChoixIComponent,
    PageDeChoixCComponent,
    AccueilCComponent,
    CandidatsFavorisRComponent,
    ProgrammerEntretienComponent,
    ProfilRecruteurComponent,
    OffreRecentComponent,
    ToutesLesOffresComponent,
    ProgressionComponent,
    TdbRecruteurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

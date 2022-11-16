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

@NgModule({
  declarations: [
    AppComponent,
    InscriptionCandidatComponent,
    ConnexionCandidatComponent,
    AProposComponent,
    RecuperationMdpComponent,
    CreationMdpComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

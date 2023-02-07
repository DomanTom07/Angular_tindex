/*
* File: app.module.ts
* Author: Tamás Domán
* Copyright: 2023, Tamás Domán
* Group: Szoft II N
* Date: 2023-02-07
* Github: https://github.com/DomanTom07/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { AboutComponent } from './about/about.component';
import { TindexComponent } from './tindex/tindex.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    AboutComponent,
    TindexComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

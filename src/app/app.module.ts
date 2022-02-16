import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    MainMenuComponent,
    FooterComponent,
    ContactModalComponent,
    NosotrosComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormBuilder,
    FormsModule,
    FormGroup,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

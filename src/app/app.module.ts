import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'catalogo',
    component: CatalogComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    CatalogComponent,
    ContactoComponent,
    AboutComponent
  ],
  
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

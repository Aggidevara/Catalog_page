import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogFilterComponent } from './catalog-filter/catalog-filter.component';
// import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogFilterComponent,
    // CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

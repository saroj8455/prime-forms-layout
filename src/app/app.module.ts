import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeSetupModule } from './module/prime-setup/prime-setup.module';
import { FormsLayoutComponent } from './components/forms-layout/forms-layout.component';
import { CountryService } from './services/country.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent, FormsLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeSetupModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CountryService, FilterService],
  bootstrap: [AppComponent],
})
export class AppModule {}

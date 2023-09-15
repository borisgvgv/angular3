import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CabComponent } from './cab/cab.component';
import { OtrohomeComponent } from './otrohome/otrohome.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabComponent,
    OtrohomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

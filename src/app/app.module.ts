import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CommonModule } from '@angular/common';
import { 
  NbThemeModule, 
  NbButtonModule, 
  NbMenuModule, 
  NbLayoutModule,
} from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDYV8ncv-EyFef2zflvtoMfamNF7jLdZp0",
      authDomain: "angular-demo-85242.firebaseapp.com",
      projectId: "angular-demo-85242",
      storageBucket: "angular-demo-85242.appspot.com",
      messagingSenderId: "145809722741",
      appId: "1:145809722741:web:b704e6e395823c3081573c"
    }),
    NbThemeModule.forRoot(),
    AngularFirestoreModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

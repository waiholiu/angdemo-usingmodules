import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ExternalModule } from './external/external.module';
import { ThirdComponent } from './third/third.component';
import { SharedModule } from './shared/shared.module';
import { FirstdirDirective } from './firstdir.directive';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ThirdComponent,
    FirstdirDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ExternalModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

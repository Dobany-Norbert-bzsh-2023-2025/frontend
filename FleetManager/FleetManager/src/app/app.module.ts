import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { DriverComponent } from './driver/driver.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    NavBarComponent,
    HomeComponent,
    DriverComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

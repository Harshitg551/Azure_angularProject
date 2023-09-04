import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageRecComponent } from './image-rec/image-rec.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { TranslateComponent } from './translate/translate.component';
import { SearchComponent } from './search/search.component';
import { MsServiceService } from './ms-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageRecComponent,
    TranslateComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxJsonViewerModule,
  ],
  providers: [MsServiceService],
  bootstrap: [AppComponent],
  

})
export class AppModule { }

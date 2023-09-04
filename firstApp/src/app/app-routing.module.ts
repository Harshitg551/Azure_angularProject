import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageRecComponent } from './image-rec/image-rec.component';
import { TranslateComponent } from './translate/translate.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'image-rec', component: ImageRecComponent },
  { path: 'translate', component: TranslateComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

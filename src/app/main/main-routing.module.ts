import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';

// import { LayoutComponent } from 'metronic';

const routes: Routes = [{
  path: '',
  component:MainLayoutComponent,
  children: [ {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'detail',
    component: BookDetailComponent
  },
  

]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[]

})
export class MainRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { LayoutWebComponent } from './layout/layout-web/layout-web.component';
import { AdminComponent } from './page/admin/admin.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { UserComponent } from './page/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutWebComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,

    children: [
      {
        path: '',
        component: AdminComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TabletruthComponent } from './components/tabletruth/tabletruth.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'register', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'prueba', component: PruebaComponent},
  { path: 'tableGenerator', component: TabletruthComponent },
  {path: 'user', component: HomeUserComponent,children: [
    { path: '', component: HomeUserComponent },
    { path: 'tableGenerator', component: TabletruthComponent }
  ]},
  {path: '**', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

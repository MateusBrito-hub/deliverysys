import { Routes } from '@angular/router';
import { EmpresaComponent } from './pages/company/company.component'
import { ProfileComponent } from './pages/profile/profile.component'

export const routes: Routes = [
  {path:'companies', component:EmpresaComponent },
  {path:'company/:id', component:ProfileComponent }
];

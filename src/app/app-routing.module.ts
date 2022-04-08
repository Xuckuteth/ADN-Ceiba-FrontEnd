import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'cliente', loadChildren: () => import('./feature/cliente/cliente.module').then(mod => mod.ClienteModule) },
  { path: 'pelicula', loadChildren: () => import('./feature/pelicula/pelicula.module').then(mod => mod.PeliculaModule) },
  { path: 'alquiler', loadChildren: () => import('./feature/alquiler/alquiler.module').then(mod => mod.AlquilerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

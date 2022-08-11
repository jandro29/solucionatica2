import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { SolicitudComponent } from './views/solicitud/solicitud.component';

const routes: Routes = [
  // { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '', component: IndexComponent },
  { path: 'solicitud', component: SolicitudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppRoutingModule {}

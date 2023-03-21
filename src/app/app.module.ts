import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgxPrintModule} from 'ngx-print';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxSpinnerModule } from 'ngx-spinner';


import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { AdduserComponent } from './Components/tecnicos/adduser.component';

import { UsuariosComponent } from './Components/technicals/usuarios.component';
import { DetalleUsuariosComponent } from './Components/detalle-usuarios/detalle-usuarios.component';
import { HomeComponent } from './Components/home/home.component';
import { DetalleUsuariosLimitadoComponent } from './Components/detalle-usuarios-limitado/detalle-usuarios-limitado.component';
import { CookieService } from 'ngx-cookie-service';
import { RemisionComponent } from './Components/remision/remision.component';
import { AddRemissionComponent } from './Components/add-remission/add-remission.component';
import { ResumenPorSucursalesComponent } from './Components/resumen-por-sucursales/resumen-por-sucursales.component';
import { InterceptorService } from './service/interceptor.service';

const routes :Routes = [
  {path:'', redirectTo: 'Usuarios', pathMatch: 'full'},
  {path: 'getUsuario/:id', component:DetalleUsuariosLimitadoComponent},  
  {path:'Usuarios', component: UsuariosComponent},
  {path:'AddUsers', component : AdduserComponent },
  {path:'editUser/:id', component : AdduserComponent},
  {path:'remission', component : RemisionComponent},
  {path:'AddRemissions', component : AddRemissionComponent },
  {path:'editRemission/:id', component : AddRemissionComponent},
  {path:'ResumeBranch', component : ResumenPorSucursalesComponent},
  {path:'Menu', component: MenuComponent},
  {path:'**', redirectTo: 'Usuarios', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,    
    MenuComponent,
    AdduserComponent,
    UsuariosComponent,
    DetalleUsuariosComponent,
    HomeComponent,
    DetalleUsuariosLimitadoComponent,
    RemisionComponent,
    AddRemissionComponent,
    ResumenPorSucursalesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPrintModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatNativeDateModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      closeButton: true,
      timeOut: 5000,
      progressBar: true
    }),
    NgxUiLoaderModule,
    NgxSpinnerModule,
  
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

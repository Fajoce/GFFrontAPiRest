import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Technicals } from 'src/app/Models/tecnicos';
import { UsuarioService } from 'src/app/service/tecnicos.service';

@Component({
  selector: 'app-detalle-usuarios-limitado',
  templateUrl: './detalle-usuarios-limitado.component.html',
  styleUrls: ['./detalle-usuarios-limitado.component.css']
})
export class DetalleUsuariosLimitadoComponent {
  id!:number;
  user!: Technicals;
  user$! :Observable<Technicals>;
constructor(private userservice: UsuarioService,
  private activatedRoute: ActivatedRoute){
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
}

ngOnInit(){
 //this.getInspectionById();
 this.user$ = this.userservice.getUsersById(this.id);
 console.log(this.user$);
}
getUsersById(){
 /* return this.inspectiontypeservice.getInspectionTypebyId(this.id).subscribe(data=>{
    this.inspeccion = data;
  })*/
  }
}

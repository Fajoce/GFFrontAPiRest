import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink,Route, Router } from '@angular/router';
import { Technicals } from 'src/app/Models/tecnicos';
import { UsuarioService } from 'src/app/service/tecnicos.service';
import { SucursalesService } from 'src/app/service/sucursales.service';
import { Sucursales } from 'src/app/Models/sucursales';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  forms!: FormGroup
  id!:number;
  titulo:string = 'Add Users';
  branchList$!: Observable<any>
  techList$!: Observable<any>
  @Input()  pattern!: string | RegExp

  constructor(private fg: FormBuilder, private userservice:
    UsuarioService,private branchOfficeService: SucursalesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private toastr:ToastrService,
    private spinnerService: SpinnerService
    ){
      this.forms = this.fg.group({
        technicalFullName: ['', [Validators.required,
        Validators.maxLength(30)]],
        technicalCode : ['', [Validators.required,
        Validators.maxLength(4)]],          
        branchOfficeCode: ['',Validators.required],
        technicalSalary:['', Validators.required],
    });
  this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));

  }
  ngOnInit(){
    if(this.id != 0){
      this.titulo = 'Edit Users';
      this.getUsers(this.id);
    }
    this.branchList$ = this.branchOfficeService.getBranches();
    this.techList$ = this.userservice.getUsers();
  }
 
  getUsers(id:number){
    this.userservice.getUsersById(id).subscribe(data=>{
    this.forms.patchValue({
      technicalFullName: data.technicalFullName,
      technicalCode: data.technicalCode,
      technicalSalary: data.technicalSalary,
      branchOfficeCode: data.branchOfficeCode    
      })
    })
    }

    AddEditUser(){
      const user: Technicals = {
        technicalFullName : this.forms.value.technicalFullName,
        technicalCode : this.forms.value.technicalCode,
        technicalSalary: this.forms.value.technicalSalary,
        branchOfficeCode: this.forms.value.branchOfficeCode,
         
      }
      if(this.id != 0){
        user.technicalId = this.id,
      this.EditUser(this.id,user)
      this.toastr.success('Técnico editado exitosamente!')
      }
      else{
        this.AddUser(user);  
        this.router.navigate(['/Usuarios']);      
      }
      }
      AddUser(user:Technicals){
      this.userservice.addUsers(user).subscribe(data=>{
        console.log(data);
        this.toastr.success('Tecnico creado exitosamente!')
       location.reload();
      },err =>{
        console.log(err);
        this.toastr.error('Esta sucursal ya fue asignada a este técnico!')
        this.router.navigate(['/AddUsers']);
      })
      }
      
      EditUser(id:number, user: Technicals){
        this.userservice.updateUsers(id,user).subscribe(data=>{
          console.log(data);
          this.router.navigate(['/Usuarios']);  
        })
      }

      

}

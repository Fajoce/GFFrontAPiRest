import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink,Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Remision } from 'src/app/Models/remision';
import { RemisionService } from 'src/app/service/remision.service';
import { Technicals } from 'src/app/Models/tecnicos';
import { UsuarioService } from 'src/app/service/tecnicos.service';
import { ElementosService } from 'src/app/service/elementos.service';
import { ToastrService } from 'ngx-toastr/public_api';

@Component({
  selector: 'app-add-remission',
  templateUrl: './add-remission.component.html',
  styleUrls: ['./add-remission.component.css']
})
export class AddRemissionComponent {
  forms!: FormGroup
  id!:number;
  titulo:string = 'Add Remission';
  technicalList$!: Observable<any>
  itemList$!: Observable<any>
  num!: number;

  constructor(private fg: FormBuilder, private remissionservice:
    RemisionService,private technicalService: UsuarioService,
    private itemService: ElementosService,
    private activeRoute: ActivatedRoute,
    private router: Router){
      this.forms = this.fg.group({
        remissionDate: ['', Validators.required],
        technicalCode : ['', [Validators.required,
        Validators.maxLength(4)]],          
        itemCode: ['',Validators.required],
        remissionQuantity:[0, Validators.required],
    });
    this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    }
    ngOnInit(){
      if(this.id != 0){
        this.titulo = 'Edit Users';
        this.getRemission(this.id);
      }
      this.technicalList$ = this.technicalService.getUsers();
      this.itemList$ = this.itemService.getItems();
      
    }
    getRemission(id:number){
      this.remissionservice.getRemissionsById(id).subscribe(data=>{
      this.forms.patchValue({
        remissionDate: data.remissionDate,
        technicalCode: data.technicalCode,
        itemCode: data.itemCode,
        remissionQuantity: data.remissionQuantity    
        })
      })
    }
    AddEditRemission(){
      const remission: Remision = {
        remissionDate : this.forms.value.remissionDate,
        technicalCode : this.forms.value.technicalCode,
        itemCode: this.forms.value.itemCode,
        remissionQuantity: this.forms.value.remissionQuantity,
         
      }
      if(this.id != 0){
        remission.remissionId = this.id,
      this.EditRemission(this.id,remission)
      alert('Remisión editada exitosamente!')
      }
      else{
        this.AddRemission(remission);        
        this.router.navigate(['/remission']);
      }
      }
      AddRemission(remission:Remision){
      this.remissionservice.addRemissions(remission).subscribe(data=>{
        console.log(data);
        alert('Remisión creada exitosamente!');               
      }, err=>{console.error(err); 
        alert('Este elemento ya esta asignado a este técnico!')
        this.router.navigate(['/AddRemissions']);
           
      })
    }
      EditRemission(id:number, remission: Remision){
        this.remissionservice.updateRemissions(id,remission).subscribe(data=>{
          console.log(data);
          this.router.navigate(['/remission']);  
        })       
      }    
}

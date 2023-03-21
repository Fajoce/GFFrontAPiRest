import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ResumenSucusales } from 'src/app/Models/resumen-sucusales';
import { UsuarioService } from 'src/app/service/tecnicos.service';

const users: ResumenSucusales[] = [];

@Component({
  selector: 'app-resumen-por-sucursales',
  templateUrl: './resumen-por-sucursales.component.html',
  styleUrls: ['./resumen-por-sucursales.component.css']
})
export class ResumenPorSucursalesComponent {
  displayedColumns: string[] = ['branchOfficeCode', 'branchOfficeName','add','avg','maximum','minimum'];
  dataSource = new MatTableDataSource<ResumenSucusales>(users);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private technicalService: UsuarioService){}

ngOnInit(){
  this.getResumeByBranch();
}

getResumeByBranch():void{
  this.technicalService.getResumen().subscribe(res =>{
    console.log(res);
    this.dataSource.data = res;
  });
} 

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }      
}

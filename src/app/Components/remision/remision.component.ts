import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Remision } from 'src/app/Models/remision';
import { RemisionService } from 'src/app/service/remision.service';

const users: Remision[] = [];

@Component({
  selector: 'app-remision',
  templateUrl: './remision.component.html',
  styleUrls: ['./remision.component.css']
})
export class RemisionComponent {
  displayedColumns: string[] = ['remissionId', 'remissionDate','technicalCode','technicalFullName','itemCode','itemName','remissionQuantity','acciones'];
  dataSource = new MatTableDataSource<Remision>(users);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private remissionservice: RemisionService
    ){}

  getAllRemissions(){
    this.remissionservice.getRemissions().subscribe(res =>{
      console.log(res);
      this.dataSource.data = res;
    });
  }

 
  ngOnInit(){
    this.getAllRemissions();
    }

    deleteRemissions(id:number){
      return this.remissionservice.deleteRemissions(id).subscribe(data=>{
       /*this.toast.success('Registro eliminado satisfactoriamente!');*/
       alert('Registro ' + id + ' eliminado con exito')
      this.getAllRemissions();
      })
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }
}

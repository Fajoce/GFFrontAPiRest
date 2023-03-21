import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InformeItems } from 'src/app/Models/informe-items';
import { RemisionService } from 'src/app/service/remision.service';

const items: InformeItems[] = [];

@Component({
  selector: 'app-informe-items',
  templateUrl: './informe-items.component.html',
  styleUrls: ['./informe-items.component.css']
})
export class InformeItemsComponent {
  displayedColumns: string[] = ['itemeCode', 'itemName','add','maximum','minimum'];
  dataSource = new MatTableDataSource<InformeItems>(items);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private remissionService: RemisionService){}

ngOnInit(){
  this.getResumeByItems();
}

getResumeByItems():void{
  this.remissionService.getResume().subscribe(res =>{
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

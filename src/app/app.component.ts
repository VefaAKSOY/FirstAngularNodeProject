import { Component, ViewChild } from '@angular/core';
import { response } from 'express';
import { CommonService } from './service';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommonService]

})



export class AppComponent {


  dataSource: any;
  @ViewChild(MatPaginator, { static: false }) paginator: any;
  @ViewChild(MatSort, { static: false }) sort: any;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNo', 'Edit', 'Delete'];
  User: User = new User();
  id : number = 1;
  Repdata: any;
  valbutton: string = "Save";
  title = 'AngularDemo';
  

  

  constructor(private commonService: CommonService) {
    this.commonService.getUser().subscribe((data: any) => {
      this.Repdata = data
      console.log("get data => ", data);
      //this.dataSource = new MatTableDataSource(data);
      //this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;
    });
    this.commonService.getUser().subscribe((response: any) => {
      console.log(response)
    })

  }
  onSave (user: User , isValid?: boolean) {
    user.mode = this.valbutton;
    this.commonService.saveUser(user)
      .subscribe((data: any) => {
        alert(data.data);
        this.ngOnInit();
      })
  }
  edit (kk: any) {
    this.id = kk._id;
    this.User.firstName= kk.firstName;
    this.User.lastName= kk.lastName;
    this.User.email= kk.email;
    this.User.phoneNo= kk.phoneNo;
    this.valbutton ="Update";
    }
  ngOnInit() {

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to this.dataSource.filter = filterValue;
  }
  delete (id:number) {
    this.commonService.deleteUser(id)
    .subscribe((data:any) =>   {
    alert(data.data);
    this.ngOnInit();
    })}
    
}


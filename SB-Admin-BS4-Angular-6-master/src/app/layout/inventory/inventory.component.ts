import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {MatPaginator, MatSort, MatTable, MatTableDataSource} from '@angular/material';
import {SelectionModel } from '@angular/cdk/collections';

@Component({
    selector: 'app-charts',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss'],
    animations: [routerTransition()]
})
export class InventoryComponent implements OnInit {
    public moduleName = 'Inventory';
     public searchString;
     public checked;

     @ViewChild(MatTable) table: MatTable<any>;
     displayedColumns = [/*'select', 'id',*/ 'name', 'progress', 'color'];
     dataSource: MatTableDataSource<UserData>;

     @ViewChild(MatPaginator) paginator: MatPaginator;
     @ViewChild(MatSort) sort: MatSort;
     selection = new SelectionModel(true, []);

    foods: Food[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];

     /** Whether the number of selected elements matches the total number of rows. */
     isAllSelected() {
       const numSelected = this.selection.selected.length;
       const numRows = this.dataSource.data.length;
       return numSelected === numRows;
     }

     getSelected() {
       console.log(this.selection);
     }

     /** Selects all rows if they are not all selected; otherwise clear selection. */
     masterToggle() {
       console.log(this.selection);
       this.isAllSelected() ?
         this.selection.clear() :
         this.dataSource.data.forEach(row => this.selection.select(row));
       console.log(this.selection);

     }

     onRowClicked(row) {
       console.log('Row clicked: ', row);
     }

     onPageableChange(val) {
       console.log(val);
     }

     constructor() {
       // Create 100 users
       const users: UserData[] = [];
       for (let i = 1; i <= 25; i++) { users.push(createNewUser(i)); }

       // Assign the data to the data source for the table to render
       this.dataSource = new MatTableDataSource(users);
     }

     dataSourceArray2() {
       return [{id: '18' , name: 'Jayanth' , progress: '99%' , address: 'uttarahalli' , color: 'blue'},
         {id: '27' , name: 'IronMan' , progress: '97%' , address: 'BIPS' , color: 'Maroon'}];
     }

     ngOnInit() {
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
       /*
       Below code is used to search particular column data from table
        */
       /*this.dataSource.filterPredicate = (data: UserData, filter: string) => data.name.indexOf(filter) != -1;*/
     }

     applyFilter(filterValue: string) {
       filterValue = filterValue.trim(); // Remove whitespace
       filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
       this.dataSource.filter = filterValue;
     }

     onSearch(filterValue) {
       alert(filterValue.value + ' really ??? Please wait , still functinality not implemented !');
       console.log(filterValue);
       console.log(this.searchString);
     }

     // todo: use observables to moniter changes in dtasource , listen to the events and then rerender
     // check mosh cart example
     onSortChange(obj) {
       console.log(obj);
       this.dataSource.data = this.dataSourceArray2();
       this.table.renderRows();
     }
}
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

export interface Food {
  value: string;
  viewValue: string;
}


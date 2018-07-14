import { Component, OnInit, OnChanges } from '@angular/core';
import { routerTransition } from '../../router.animations';



export interface Icommon {
value: string;
viewValue: string;
}

@Component({
    selector: 'app-charts',
    templateUrl: './manageasset.component.html',
    styleUrls: ['./manageasset.component.scss'],
    animations: [routerTransition()]
})


export class ManageassetComponent implements OnInit {
    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };

 selectedAssemblyValue: string;
 selectedAssetAssemblyValue: string;
 selectedAssetZoneValue: string;
 selectedAssetValue: string;
 selectedCalibrationValue: string;
 selectedPrintChoiceValue: string;
 barCodeValue:string;
 title:string="Barcode";
 txtPrintChoiceId: string;
 barcodeVal:string;
  canShow:boolean=true;
  barcodeName : string;
  //ddlPrintForValue:string;

assemblyLines:Icommon[] = [
{value: 'Line1', viewValue: 'Line 1'},
{value: 'Line2', viewValue: 'Line 2'},
{value: 'Line3', viewValue: 'Line 3'}
];

zones: Icommon[] = [
    {value: 'Zone1', viewValue: 'Zone 1'},
{value: 'Zone2', viewValue: 'Zone 2'},
{value: 'Zone3', viewValue: 'Zone 3'}
];

printChoice: Icommon[]=[
    {value:'zone',viewValue:'Zone'},
    {value:'asset',viewValue:'Assets'}
];
assets: Icommon[] = [
    {value: 'Wrench', viewValue: 'Wrench'},
{value: 'Sling', viewValue: 'Sling'},
];



    constructor() {}

    ngOnInit() {}

   /* btnPrintFunction(value) {
        if(this.txtPrintChoiceId){
                 this.barCodeValue = this.txtPrintChoiceId;
        } else {
 this.barCodeValue = null;
        }


    }*/

    textChanged(val) {
if(val != "")
{
    console.log("abc"  + val);
this.barcodeVal = val;
}
else
{
this.barcodeVal="";
//this.barcodeVal=this.ddlPrintForValue }
}
}

}


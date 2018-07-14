import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ManageassetRoutingModule } from './manageasset-routing.module';
import { ManageassetComponent } from './manageasset.component';
import { PageHeaderModule } from '../../shared';
import { MaterialModule } from '../../shared/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule, Ng2Charts, ManageassetRoutingModule, PageHeaderModule, MaterialModule,FormsModule],
    declarations: [ManageassetComponent]
})
export class ManageassetModule {}

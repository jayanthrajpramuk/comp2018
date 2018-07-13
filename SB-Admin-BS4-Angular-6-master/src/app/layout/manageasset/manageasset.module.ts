import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ManageassetRoutingModule } from './manageasset-routing.module';
import { ManageassetComponent } from './manageasset.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, ManageassetRoutingModule, PageHeaderModule],
    declarations: [ManageassetComponent]
})
export class ManageassetModule {}

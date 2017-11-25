import { CommonModule } from '@angular/common';
import { OrderBy } from './pipes/orderBy/orderBy.pipe';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports:[
        CommonModule,
        RouterModule
    ],
    declarations: [
        OrderBy
    ],
    exports: [
        OrderBy
    ]
})

export class SharedModule{

}
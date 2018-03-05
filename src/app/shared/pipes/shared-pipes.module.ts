import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFilterPipe } from './user-filter.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [UserFilterPipe]
})
export class SharedPipesModule { }

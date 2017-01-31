import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent} from '../second/second.component'
import { SharedModule} from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SecondComponent],
  exports: [SecondComponent]
})
export class ExternalModule { }

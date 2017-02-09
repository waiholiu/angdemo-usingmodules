import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxgridComponent } from '../textboxgrid/textboxgrid.component';
import { LabelboxComponent } from '../labelbox/labelbox.component';
import { InboxComponent } from './inbox/inbox.component';




@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextboxgridComponent,
    LabelboxComponent,
    InboxComponent
  ]
  ,
  exports: [
    TextboxgridComponent,
    LabelboxComponent
  ]
})
export class SharedModule { }

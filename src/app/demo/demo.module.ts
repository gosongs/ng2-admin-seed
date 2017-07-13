import { NgModule } from '@angular/core';

import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  imports: [
    DemoRoutingModule
  ],
  declarations: [ DemoComponent ]
})
export class DemoModule { }

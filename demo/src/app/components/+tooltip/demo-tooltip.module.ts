import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TooltipModule } from '@danielson73s/ngx-bootstrap/tooltip';

import { DocsModule } from '../../docs';
import { TooltipSectionComponent } from './tooltip-section.component';
import { DEMO_COMPONENTS } from './demos/index';
import { routes } from './demo-tooltip.routes';

@NgModule({
  declarations: [
    TooltipSectionComponent,
    ...DEMO_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    DocsModule,
    TooltipModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports: [TooltipSectionComponent],
  entryComponents: [...DEMO_COMPONENTS]
})
export class DemoTooltipModule {}

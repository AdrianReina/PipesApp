import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [AppMenuComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [AppMenuComponent],
})
export class SharedModule {}

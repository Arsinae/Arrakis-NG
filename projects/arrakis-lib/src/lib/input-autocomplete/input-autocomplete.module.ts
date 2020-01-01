import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARInputAutocompleteComponent } from './input-autocomplete.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ARInputAutocompleteComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ARInputAutocompleteComponent
  ]
})
export class ARInputAutocompleteModule { }

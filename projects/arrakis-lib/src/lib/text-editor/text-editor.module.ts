import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARTextEditorComponent } from './text-editor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ARTextEditorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ARTextEditorComponent
  ]
})
export class ARTextEditorModule { }

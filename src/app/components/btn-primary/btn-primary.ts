import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'btn-primary',
  imports: [CommonModule],
  templateUrl: './btn-primary.html',
  styleUrl: './btn-primary.scss',
})

export class BtnPrimary {
@Input ("btn-text") btnText: string = "";
@Output ("submit") onSubmit = new EventEmitter();
@Input() disabled:boolean = false; 
@Input() loading: boolean = false;
@Input() variant: BtnVariants = "primary";
  submit(){
    this.onSubmit.emit();
  }
}

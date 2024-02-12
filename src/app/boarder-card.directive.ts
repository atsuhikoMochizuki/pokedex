import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmnBoarderCard]'
})
export class BoarderCardDirective {
  private initialColor:string = "";
  private defaultColor:string="";
  private defaultHeight:number = 180;

  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('pkmnBoarderCard') borderColor!:string;

  @HostListener('mouseenter')
  onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  setHeight(height:number):void{
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color:string):void{
    this.el.nativeElement.style.border= `solid 4px ${color}`;
  }

}
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomif]',
})
export class CustomifDirective {
  //TemplateRef
  //ViewContainerRef
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  /**
   *
   * LoginComponent ----> customIf true
   *  --> CustomIfDirective
   */
  //@Input()

  @Input() set appCustomif(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}

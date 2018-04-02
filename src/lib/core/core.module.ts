import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClassExtractorDirective } from "./directives/class-extractor.directive";

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      ClassExtractorDirective
    ],
    exports: [
      ClassExtractorDirective
    ]
  })
  export class CoreModule { }
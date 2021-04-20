import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
    NativeScriptAnimationsModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    ModalDialogService
} from "@nativescript/angular";
import { COMPONENTS } from "./index";
import { registerElement } from "nativescript-angular/element-registry";

import { Gif } from 'nativescript-gif';
import { NativeScriptLocalizeModule } from "nativescript-localize/localize.module";

registerElement('Gif', () => Gif);

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptAnimationsModule,
        NativeScriptLocalizeModule
    ],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    providers: [
        ModalDialogService
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule { }
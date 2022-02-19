import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.componen";

@NgModule({

    declarations:[
        ContadorComponent
    ],

    exports: [
        ContadorComponent
    ],

    imports: [

    ]
})

export class ContadorModule {}
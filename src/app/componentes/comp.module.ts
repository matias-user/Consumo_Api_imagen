import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
    declarations:[
        HeaderComponent,
        MainComponent,
        SidebarComponent
    ],
    exports:[
        HeaderComponent,
        MainComponent,
        SidebarComponent
    ],
    imports:[
        CommonModule
    ]
})
export class CompModule { }
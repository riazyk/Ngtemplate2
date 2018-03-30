import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from '../../node_modules/primeng/components/inputtext/inputtext';
import { CheckboxModule } from '../../node_modules/primeng/components/checkbox/checkbox';
import { RadioButtonModule } from '../../node_modules/primeng/components/radiobutton/radiobutton';
import { ButtonModule } from '../../node_modules/primeng/components/button/button';
import { TabViewModule } from '../../node_modules/primeng/components/tabview/tabview';
import { CodeHighlighterModule } from '../../node_modules/primeng/components/codehighlighter/codehighlighter';
import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TooltipModule } from '../../node_modules/primeng/components/tooltip/tooltip';
import { ListboxModule } from 'primeng/listbox';
import { RouterModule } from '@angular/router';
import { GrowlModule } from '../../node_modules/primeng/components/growl/growl';
import { PanelModule } from '../../node_modules/primeng/components/panel/panel';
import { DropdownModule } from '../../node_modules/primeng/components/dropdown/dropdown';
import { InputTextareaModule } from '../../node_modules/primeng/components/inputtextarea/inputtextarea';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuModule } from '../../node_modules/primeng/menu';
import { MenuItem } from '../../node_modules/primeng/api';
import { PanelMenuModule } from '../../node_modules/primeng/panelmenu';
import { InputSwitchModule } from '../../node_modules/primeng/inputswitch';
import { SidebarModule } from '../../node_modules/primeng/sidebar';
import { UserProfileComponent } from './user-profile/user-profile.component';
// import {Message} from 'primeng/components/common/api';
// import {MessageService} from 'primeng/components/common/messageservice';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    CommonModule,
    InputTextModule,
    TabViewModule,
    CodeHighlighterModule,
    CalendarModule,
    ChipsModule,
    BrowserAnimationsModule,
    DropdownModule,
    KeyFilterModule,
    TooltipModule,
    ListboxModule,
    RouterModule,
    GrowlModule,
    PanelModule,
    DropdownModule,
    InputTextareaModule,
    MenuModule,
    PanelMenuModule,
    InputSwitchModule,
    SidebarModule,
    MessageModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

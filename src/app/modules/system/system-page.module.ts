import { NgModule } from '@angular/core';
import { SystemPageRoutingModule } from './system-page.routing';

/*material*/
import { MdButtonModule, MdInputModule, MdDialogModule, MdMenuModule, MdCheckboxModule, MdSlideToggleModule, MdListModule, MdCardModule } from '@angular/material';

/*ng-bootstrap*/
import { NgbModalModule, NgbDatepickerModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

/*ng2-select*/
import { SelectModule } from 'ng2-select';

/*share module*/
import { ToolModule } from './../../../tools/tool.module';

/*system pages*/
import { MenuSettingComponent, MenuChildrenDialog } from './pages/menu-setting/menu-setting.component';
import { PermissionManagerComponent } from './pages/permission-manager/permission-manager.component';
import { RoleManagerComponent } from './pages/role-manager/role-manager.component';
import { AdminManagerComponent } from './pages/admin-manager/admin-manager.component';

/*modals list*/
import { RoleInfoComponent } from './modals/role-info/role-info.component';
import { RoleAddComponent } from './modals/role-add/role-add.component';
import { PermissionChangeChildComponent } from './modals/permission-change-child/permission-change-child.component';
import { PermissionAddModelComponent } from './modals/permission-add-model/permission-add-model.component';
import { PermissionAddChildComponent } from './modals/permission-add-child/permission-add-child.component';
import { MenuAddMainComponent } from './modals/menu-add-main/menu-add-main.component';
import { MenuAddChildComponent } from './modals/menu-add-child/menu-add-child.component';
import { MenuChangeMainComponent } from './modals/menu-change-main/menu-change-main.component';
import { MenuChangeChildComponent } from './modals/menu-change-child/menu-change-child.component';
import { PermissionChangeMainComponent } from './modals/permission-change-main/permission-change-main.component';
import { AdminChangeComponent } from './modals/admin-change/admin-change.component';
import { AdminAddComponent } from './modals/admin-add/admin-add.component';

@NgModule({
  imports: [

    /*material module*/
    MdButtonModule,
    MdInputModule,
    MdDialogModule,
    MdMenuModule,
    MdCheckboxModule,
    MdSlideToggleModule,
    MdListModule,
    MdCardModule,

    /*ng2-select*/
    SelectModule,

    /*ng-bootstrap*/
    NgbModalModule,

    /*system module*/
    SystemPageRoutingModule,

    /*share module*/
    ToolModule,
  ],
  declarations: [
    MenuSettingComponent,
    MenuChildrenDialog,
    PermissionManagerComponent,
    RoleManagerComponent,
    RoleInfoComponent,
    RoleAddComponent,
    PermissionChangeChildComponent,
    PermissionAddModelComponent,
    PermissionAddChildComponent,
    PermissionChangeMainComponent,
    MenuAddMainComponent,
    MenuAddChildComponent,
    MenuChangeMainComponent,
    MenuChangeChildComponent,
    AdminManagerComponent,
    AdminChangeComponent,
    AdminAddComponent,
  ],
  entryComponents: [
    MenuChildrenDialog,
    RoleInfoComponent,
    RoleAddComponent,
    PermissionChangeChildComponent,
    PermissionAddModelComponent,
    PermissionAddChildComponent,
    PermissionChangeMainComponent,
    MenuAddMainComponent,
    MenuAddChildComponent,
    MenuChangeMainComponent,
    MenuChangeChildComponent,
    AdminChangeComponent,
    AdminAddComponent,
  ],
})
export class SystemPageModule { }
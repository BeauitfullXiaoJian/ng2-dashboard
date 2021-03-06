/*Angular*/
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// /*Material*/
import { MdButtonModule, MdDialogModule, MdSelectModule, MdInputModule, MdSlideToggleModule, MdListModule } from '@angular/material';

/*ng2-charts*/
import { ChartsModule } from 'ng2-charts';

/*ng2-select*/
import { SelectModule } from 'ng2-select';

/*ng-bootstrap*/
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

/*tool-module*/
import { ToolModule } from './../../../tools/tool.module';

/*引入路由模块*/
import { TestRoutingModule } from './test-routing.module'

/*引入页面组件*/
import { ConfirmWindowComponent } from './pages/confirm-window/confirm-window.component';
import { AlertWindowComponent } from './pages/alert-window/alert-window.component';
import { ChartsDemoComponent } from './pages/charts-demo/charts-demo.component';
import { SortableDemoComponent } from './pages/sortable-demo/sortable-demo.component';
import { SelectDemoComponent } from './pages/select-demo/select-demo.component';
import { TableDemoComponent } from './pages/table-demo/table-demo.component';
import { FormDemoComponent } from './pages/form-demo/form-demo.component';
import { LoadingServiceComponent } from './pages/loading-service/loading-service.component';
import { ToastrDemoComponent } from './pages/toastr-demo/toastr-demo.component';
// import { HomeComponent } from './pages/home/home.component';
import { UploadDemoComponent } from './pages/upload-demo/upload-demo.component';
import { RequestServiceComponent } from './pages/request-service/request-service.component';
import { UploadServiceComponent } from './pages/upload-service/upload-service.component';

@NgModule({
  imports: [
    HttpModule,
    TestRoutingModule,
    MdDialogModule,
    MdButtonModule,
    ChartsModule,
    MdSelectModule,
    MdInputModule,
    MdSlideToggleModule,
    MdListModule,
    SelectModule,
    NgbProgressbarModule,
    ToolModule
  ],
  declarations: [
    /*pages list*/
    ConfirmWindowComponent,
    AlertWindowComponent,
    ChartsDemoComponent,
    SortableDemoComponent,
    SelectDemoComponent,
    TableDemoComponent,
    FormDemoComponent,
    LoadingServiceComponent,
    ToastrDemoComponent,
    UploadDemoComponent,
    RequestServiceComponent,
    UploadServiceComponent,
  ],
  exports: [
    ConfirmWindowComponent,
    AlertWindowComponent,
    ChartsDemoComponent,
    SortableDemoComponent,
    SelectDemoComponent,
    TableDemoComponent,
    FormDemoComponent,
    LoadingServiceComponent,
    ToastrDemoComponent,
    UploadDemoComponent,
    RequestServiceComponent,
    UploadServiceComponent,
  ]
})
export class TestModule { }

/*Angular*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// /*Material*/
import { MdButtonModule, MdDialogModule, MdSelectModule, MdInputModule, MdSlideToggleModule, MdListModule, MdCardModule } from '@angular/material';

/*ng2-charts*/
import { ChartsModule } from 'ng2-charts';

/*sortablejs*/
import { SortablejsModule } from 'angular-sortablejs';

/*ng2-select*/
import { SelectModule } from 'ng2-select';

/*ng-bootstrap*/
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

/*SyntaxHighlighter*/
import 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

/*tool-module*/
import { ToolModule } from './../../system/tools/tool.module';

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
import { HomeComponent } from './pages/home/home.component';
import { UploadDemoComponent } from './pages/upload-demo/upload-demo.component';
import { RequestServiceComponent } from './pages/request-service/request-service.component';
import { UploadServiceComponent } from './pages/upload-service/upload-service.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TestRoutingModule,
    MdDialogModule,
    MdButtonModule,
    ChartsModule,
    SortablejsModule,
    MdSelectModule,
    MdInputModule,
    MdSlideToggleModule,
    MdListModule,
    MdCardModule,
    SelectModule,
    NgbProgressbarModule.forRoot(),
    Ng2HandySyntaxHighlighterModule,
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
    HomeComponent,
    UploadDemoComponent,
    RequestServiceComponent,
    UploadServiceComponent,
  ],
  exports:[
    ConfirmWindowComponent,
    AlertWindowComponent,
    ChartsDemoComponent,
    SortableDemoComponent,
    SelectDemoComponent,
    TableDemoComponent,
    FormDemoComponent,
    LoadingServiceComponent,
    ToastrDemoComponent,
    HomeComponent,
    UploadDemoComponent,
    RequestServiceComponent,
    UploadServiceComponent,
  ]
})
export class TestModule { }
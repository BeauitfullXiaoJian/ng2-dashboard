/*angular module*/
import { NgModule } from '@angular/core';

/*material module*/
import { MdButtonModule, MdCardModule, MdPaginatorModule, MdTableModule, MdTooltipModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';

/*tool-module*/
import { ToolModule } from './../../../tools/tool.module';

/*froala-editor*/
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

/*ng-bootstrap*/
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

/*routing-module*/
import { ExampleRoutingModule } from './example.routing';

/*page list */
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { CardComponent } from './pages/card/card.component';
import { EditorComponent } from './pages/editor/editor.component';
import { TableComponent } from './pages/table/table.component';

@NgModule({
  imports: [
    ExampleRoutingModule,
    NgbDatepickerModule,
    MdButtonModule, MdCardModule, MdPaginatorModule, MdTableModule, MdTooltipModule, MdDatepickerModule, MdNativeDateModule,
    FroalaEditorModule, FroalaViewModule,
    ToolModule,
  ],
  declarations: [
    DatepickerComponent,
    CardComponent,
    EditorComponent,
    EditorComponent,
    TableComponent,
  ],
})
export class ExampleModule { }

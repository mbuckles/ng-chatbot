import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../chat.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
   exports: [ ChatDialogComponent ], // <-- export here
  declarations: [ChatDialogComponent],
  providers: [ChatService]
})
export class ChatModule { }

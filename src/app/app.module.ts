import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EasyUIModule } from '../angular-easyui-1.1.14/components/easyui/easyui.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    EasyUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

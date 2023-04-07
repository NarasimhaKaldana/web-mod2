import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './components/binding/binding.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MathComponent } from './components/math/math.component';
import { FormComponent } from './components/form/form.component';
import { HttpComponent } from './components/http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    CalculatorComponent,
    MathComponent,
    FormComponent,
    HttpComponent
  ],
  imports: [
    FormsModule,BrowserModule,  HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

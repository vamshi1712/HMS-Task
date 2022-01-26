import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientService } from './shared/patient.service';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeletePatientComponent } from './patient/delete-patient/delete-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientListComponent,
    AddPatientComponent,
    DeletePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

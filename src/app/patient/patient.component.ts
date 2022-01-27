import { Component, EventEmitter, OnInit } from '@angular/core';
import { Patient } from '../shared/model/patient';
import { PatientService } from '../shared/patient.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Patient[] = []

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.patientService.getPatients().subscribe(res => {
      this.patients = res;
    })
  }

  post(patient: Patient) {
    this.patientService.postPatient(patient).subscribe(res => {
      this.patients.push(res);
    });

  }

  delete(patient: any) {
    this.patientService.deletePatient(patient.id).subscribe(res => {
      this.get();
    })
  }

  update(patient: any) {  
    this.patientService.updatePatient(patient.id, patient).subscribe(res => {
      this.get()
    })
  }

}

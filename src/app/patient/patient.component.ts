import { Component, OnInit } from '@angular/core';
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

  post() {
    let patient: Patient = {
      name: "vamshi", age: 22, sex: "Male", checkInDate: ""
    }
    this.patientService.postPatient(patient).subscribe(res => {
      this.patients.push(res)
    })
  }

  delete(patient: any) {
    this.patientService.deletePatient(patient.id).subscribe(res => {
      console.log(res);
      this.get();
    })
  }

  update(patient: any) {
    let updatedPatient: Patient = {
     age: 11 
    }
    this.patientService.updatePatient(patient.id, updatedPatient).subscribe(res => {
      console.log(res);
      this.get()
    })
  }

}

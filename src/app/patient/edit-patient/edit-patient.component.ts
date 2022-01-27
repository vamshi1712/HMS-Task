import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Patient } from 'src/app/shared/model/patient';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  @Input() patient: any;
  
  @Output() closeEditPatientModal = new EventEmitter();
  @Output() editPatientData = new EventEmitter<Patient>();

  submitted: Boolean = false

  editPatientForm = new FormGroup({
    name: new FormControl(null),
    age: new FormControl(null),
    sex: new FormControl(null),
    checkInDate: new FormControl(null)
  })

  constructor() { }

  ngOnInit(): void {
    this.editPatientForm.setValue({
      name: this.patient.name,
      age: this.patient.age,
      sex: this.patient.sex,
      checkInDate: this.patient.checkInDate,
    })
  }

  get getControls() {
    return this.editPatientForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.editPatientForm.valid) {
      let updatedPatient: Patient = {
        ...this.editPatientForm.value,
        id: this.patient.id
      }
      this.editPatientData.emit(updatedPatient);
    }
  }
}

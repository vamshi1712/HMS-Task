import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Patient } from 'src/app/shared/model/patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {


  @Output() closeAddPatientModal = new EventEmitter();
  @Output() postPatientData = new EventEmitter<Patient>();

  submitted: Boolean = false;

  addPatientForm = new FormGroup({
    name: new FormControl(null),
    age: new FormControl(null),
    sex: new FormControl(null),
    checkInDate: new FormControl(null)
  })

  constructor() { }

  ngOnInit(): void {
  }

  get getControls() {
    return this.addPatientForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.addPatientForm.valid){
      this.postPatientData.emit(this.addPatientForm.value)
    }
  }

}

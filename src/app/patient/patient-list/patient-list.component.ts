import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/shared/model/patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  @Input() patients: Patient[] = [];

  @Output() newPatientData = new EventEmitter<Patient>();
  @Output() deletePatientData = new EventEmitter<Patient>();

  deletablePatient: Patient;
  addPatientModal: Boolean = false;
  deletePatientModal: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  deletePatient(patient: Patient) {
    this.deletablePatient = patient;
    this.showDeletePatientModal()
  }

  delete(patient: Patient) {
    this.deletePatientData.emit(patient);
    this.closeDeletePatientModal('')
  }

  postPatientData(patient: Patient) {
    this.newPatientData.emit(patient)
    this.closeAddPatientModal('')
  }

  showDeletePatientModal() {
    this.deletePatientModal = true;
  }

  closeDeletePatientModal(e: any) {
    this.deletePatientModal = false;
  }

  showAddPatientModal() {
    this.addPatientModal = true;
  }

  closeAddPatientModal(e: any) {
    this.addPatientModal = false;
  }

}

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
  @Output() editPatientData = new EventEmitter<Patient>();

  deletablePatient: Patient;
  editablePatient: Patient;
  addPatientModal: Boolean = false;
  editPatientModal: Boolean = false;
  deletePatientModal: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  editPatient(patient: Patient) {
    this.editablePatient = patient;
    this.showEditPatientModal()
  }

  deletePatient(patient: Patient) {
    this.deletablePatient = patient;
    this.showDeletePatientModal()
  }

  delete(patient: Patient) {
    this.deletePatientData.emit(patient);
    this.closeDeletePatientModal('')
  }

  editPatientEmit(patient: Patient) {
    this.editPatientData.emit(patient)
    this.closeEditPatientModal('')
  }

  postPatientData(patient: Patient) {
    this.newPatientData.emit(patient)
    this.closeAddPatientModal('')
  }

  showEditPatientModal() {
    this.editPatientModal = true;
  }

  closeEditPatientModal(e: any) {
    this.editPatientModal = false;
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

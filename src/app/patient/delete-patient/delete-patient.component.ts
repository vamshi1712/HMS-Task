import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/shared/model/patient';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {

  @Input() patient: Patient;

  @Output() closeDeletePatientModal = new EventEmitter();
  @Output() deletePatient = new EventEmitter<Patient>();

  constructor() { }

  ngOnInit(): void {
  }

}

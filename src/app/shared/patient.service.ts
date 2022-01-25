import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private BASE_URL: String = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getPatients() {
    return this.http.get<Patient[]>(this.BASE_URL + 'patients');
  }

  postPatient(patient: Patient) {
    return this.http.post<Patient>(this.BASE_URL + 'patients', patient);
  }

  deletePatient(id: Number) {
    return this.http.delete(this.BASE_URL + 'patients/' + id);
  }

  updatePatient(id: Number, patient: Patient) {
    return this.http.patch(this.BASE_URL + 'patients/' + id, patient);
  }

}

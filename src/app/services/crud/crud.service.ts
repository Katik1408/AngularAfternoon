import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiURL;
const STUDENTS = 'api/students';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private httpClient: HttpClient) {}

  getAllStudents() {
    return this.httpClient.get(`${API_URL}${STUDENTS}`);
  }

  createNewStudent(values) {
    return this.httpClient.post(`${API_URL}${STUDENTS}`, values);
  }
}
//HTTPCLient

//@CorsOrigin(origin="http://localhost:4200")

//HTTP Verbs
//GET
//POST
//PUT
//PATCH
//DELETE
//OPTIONS

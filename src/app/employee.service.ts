import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './assign-asset/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) { }
  getAllEmployee(): Observable <Array<Employee>> {
    const apiUrl = 'https://localhost:44352/api/Employee/GetEmployeesDropDown';
    return this.httpClient.get<Array<Employee>>(apiUrl);
  }
}

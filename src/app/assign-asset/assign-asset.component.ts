import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { AssignAsset } from './assign-asset';
import { AssignAssetService } from '../assign-asset.service';
import { ToastrService } from 'ngx-toastr';
import { HttpResponse } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-assign-asset',
  templateUrl: './assign-asset.component.html',
  styleUrls: ['./assign-asset.component.scss']
})
export class AssignAssetComponent implements OnInit {
  employees;
  assetId;
  dateTo: Date;
  dateFrom: Date;
  employeeId: number;
  asset: AssignAsset;
  constructor(private employeeService: EmployeeService, private assignService: AssignAssetService,
              private loginService: LoginService,
              private route: ActivatedRoute, private toastr: ToastrService) {
    this.route.paramMap.subscribe(params => {
      this.assetId = params.get('assetId');
     });
   }

  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe(res => this.employees = res);
  }
  onSubmit() {
    this.asset  = new AssignAsset(this.assetId, this.employeeId, this.dateFrom, this.dateTo, Number(this.loginService.getUserId()));
    this.assignService.assignAsset(this.asset).subscribe((res) => {
      console.log(res);
      if (res.status === 200) {
        this.toastr.success('Asset is assigned.');
      } else {
      this.toastr.error('Error, asset is not assigned');
      }
    },
    error => {
      this.toastr.error('Error, asset is not assigned');
    }
    );
  }

}

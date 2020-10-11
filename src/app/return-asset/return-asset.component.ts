import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AssignAssetService } from '../assign-asset.service';
import { AssignAsset } from '../assign-asset/assign-asset';
import { AssignedAssets } from '../assigned-assets/assigned-assets';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-return-asset',
  templateUrl: './return-asset.component.html',
  styleUrls: ['./return-asset.component.scss']
})
export class ReturnAssetComponent implements OnInit {
  asset: AssignedAssets;
  assetId: number;
  dateTo: Date;
  dateFrom: Date;
  employeeId: number;
  employees;
  assignAssetId;
  newAsset: AssignAsset;
  comment;
  constructor(private assignedService: AssignAssetService, private employeeService: EmployeeService,
              private toastr: ToastrService ) { }

  ngOnInit() {
  this.asset = this.assignedService.getAssignedAsset();
  this.assetId = this.asset.assetId;
  this.dateFrom = new Date(this.asset.dateFrom);
  this.dateTo = this.dateTo;
  this.employeeId = this.asset.employeeId;
  this.assignAssetId = this.asset.assignAssetId;
  this.employeeService.getAllEmployee().subscribe(res => this.employees = res);
  }
  onSubmit() {
    this.newAsset = new AssignAsset(this.assetId, this.employeeId, this.dateFrom, this.dateTo, this.comment, this.assignAssetId);
    this.assignedService.updateAssignedAsset(this.newAsset).subscribe((res) => {
      console.log(res);
      if (res.status === 200) {
        this.toastr.success('Data is updated.');
      } else {
      this.toastr.error('Error, data is not updated');
      }
    },
    error => {
      this.toastr.error('Error, data is not updated');
    }
    );
  }
  dateChanged(eventDate: string): Date | null {
    return !!eventDate ? new Date(eventDate) : null;
  }
  checkDate(): boolean {
    if ( this.dateFrom > this.dateTo ) {
      return true;
    } else {
      return false;
    }
  }
}

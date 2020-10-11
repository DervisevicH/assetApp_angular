import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AssignAssetService } from '../assign-asset.service';
import { AssignedAssets } from './assigned-assets';

@Component({
  selector: 'app-assigned-assets',
  templateUrl: './assigned-assets.component.html',
  styleUrls: ['./assigned-assets.component.scss']
})
export class AssignedAssetsComponent implements OnInit {
  assignedAssets: AssignedAssets[];

  constructor(private assignService: AssignAssetService, private route: Router) { }

  ngOnInit() {
  this.assignService.getAssignedAssets().subscribe((res: AssignedAssets[]) =>
        this.assignedAssets = res
        );
  }
  onSelectedAsset(asset: AssignedAssets) {
    console.log(asset);
    this.assignService.setAssignedAsset(asset);
    this.route.navigate(['return-assets']);
  }
}

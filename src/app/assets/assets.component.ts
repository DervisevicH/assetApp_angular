import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../assets.service';
import { Assets } from './assets';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  assets: Assets[];
  constructor(private assetsService: AssetsService) { }

  ngOnInit() {
    this.assetsService.getAllAssets().subscribe((res: Assets[]) =>
        this.assets = res
       );
  }

}

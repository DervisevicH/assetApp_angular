import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { AssignAssetComponent } from './assign-asset/assign-asset.component';
import { AssignedAssets } from './assigned-assets/assigned-assets';
import { AssignedAssetsComponent } from './assigned-assets/assigned-assets.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ReturnAssetComponent } from './return-asset/return-asset.component';


const routes: Routes = [
  { path: '', component: AssetsComponent },
  { path: 'home', component: AssetsComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'assign-asset/:assetId', component: AssignAssetComponent, canActivate: [AuthGuardService] },
  { path: 'assigned-assets', component: AssignedAssetsComponent, canActivate: [AuthGuardService] },
  { path: 'return-assets', component: ReturnAssetComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetsComponent } from './assets/assets.component';
import { AssetsService } from './assets.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AssignAssetComponent } from './assign-asset/assign-asset.component';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import { AssignAssetService } from './assign-asset.service';
import { AssignedAssetsComponent } from './assigned-assets/assigned-assets.component';
import { ReturnAssetComponent } from './return-asset/return-asset.component';
import { HeaderComponent } from './header/header.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthInterceptor } from './auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    AssignAssetComponent,
    AssignedAssetsComponent,
    ReturnAssetComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [AssetsService, EmployeeService, AssignAssetService, ToastrService, LoginService, AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

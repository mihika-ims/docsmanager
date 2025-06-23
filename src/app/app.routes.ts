import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { IntroComponent } from './components/intro/intro.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyComponent } from './components/verify/verify.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UploadsComponent } from './components/uploads/uploads.component';
import { AttachDocsComponent } from './components/attach-docs/attach-docs.component';
import { UploadInfoComponent } from './components/upload-info/upload-info.component';
import { MyInvoiceComponent } from './components/my-invoice/my-invoice.component';
import { CameraComponent } from './components/camera/camera.component';
import { ImageViewComponent } from './components/image-view/image-view.component';

export const routes: Routes = [
    { path: '', redirectTo: 'intro', pathMatch: "full" },
    { path: 'intro', component: IntroComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'verify', component: VerifyComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'uploads', component: UploadsComponent },
    { path: 'attach-docs', component: AttachDocsComponent },
    { path: 'upload-info', component: UploadInfoComponent },
    { path: 'my-invoice', component: MyInvoiceComponent },
    { path: 'camera', component: CameraComponent },
    { path: 'image-view', component: ImageViewComponent }


];

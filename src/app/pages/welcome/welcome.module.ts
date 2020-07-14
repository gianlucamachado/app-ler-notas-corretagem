import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomePageRoutingModule } from './welcome-routing.module';
import { WelcomePage } from './welcome.page';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    SharedModule,
    WelcomePageRoutingModule,
  ],
  declarations: [
    WelcomePage,
    LoginComponent,
  ],
})
export class WelcomePageModule { }

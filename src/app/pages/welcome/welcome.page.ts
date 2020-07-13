import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  public backgroundImagePath = 'assets/imgs/login-background.jpg';

  constructor(
    private modalController: ModalController,
    private darkModeService: DarkModeService,
    // private router: Router,
  ) { }

  ngOnInit() {
    this.darkModeService.updateDarkMode(false);
  }

  getBackgroundStyle() {
    const property: any = {};
    property['background-image'] = `url(${this.backgroundImagePath})`;
    return property;
  }

  clickCreateAccount() {
    // this.router.navigate(['tabs/tabs/tab1']);
  }

  async clickLogin() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      swipeToClose: true,
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
  }

}

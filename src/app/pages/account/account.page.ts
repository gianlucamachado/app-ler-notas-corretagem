import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  public dark = false;

  /**
   * @ignore
   */
  constructor(
    private darkModeService: DarkModeService,
  ) { }

  /**
   * @ignore
   */
  ngOnInit() {
    this.dark = this.darkModeService.getCurrentValue();
  }

  updateDarkMode() {
    this.darkModeService.updateDarkMode(this.dark);
  }

}

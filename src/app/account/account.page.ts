import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit() {
    // verify dark mode event
    this.createListenerDarkMode();
  }

  createListenerDarkMode() {
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    this.dark = prefersColor.matches;
    this.updateDarkMode();

    prefersColor.addEventListener(
      'change',
      (mediaQuery: any) => {
        this.dark = mediaQuery.matches;
        this.updateDarkMode();
      },
    );
  }

  updateDarkMode() {
    document.body.classList.toggle('dark', this.dark);
  }

}

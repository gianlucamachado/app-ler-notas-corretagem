import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {

  public dark = false;

  constructor() { }

  createListenerDarkMode() {
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    this.dark = prefersColor.matches;
    this.updateDarkMode(this.dark);

    prefersColor.addEventListener(
      'change',
      (mediaQuery: any) => {
        this.dark = mediaQuery.matches;
        this.updateDarkMode(this.dark);
      },
    );
  }

  updateDarkMode(dark: boolean) {
    this.dark = dark;
    document.body.classList.toggle('dark', this.dark);
  }

  getCurrentValue() {
    return this.dark;
  }
}

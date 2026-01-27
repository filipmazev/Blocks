import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { DeviceTheme } from '../types/device.types';

@Injectable({
  providedIn: 'root'
})
export class ThemingService implements OnDestroy {
  private readonly mediaQueryList: MediaQueryList;
  private mediaQueryListener?: (event: MediaQueryListEvent) => void;

  private applicationThemeSubject = new ReplaySubject<DeviceTheme>(1);
  private systemThemeSubject = new BehaviorSubject<DeviceTheme>(this.detectSystemTheme());
 
  constructor() {
    this.mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    this.createSubscription();
  }

  public ngOnDestroy(): void {
    if (this.mediaQueryListener) {
      this.mediaQueryList.removeEventListener('change', this.mediaQueryListener);
    }
  }

  private createSubscription(): void {
    this.handleSystemThemeChange(this.mediaQueryList);
    this.mediaQueryListener = (event: MediaQueryListEvent) => this.handleSystemThemeChange(event);
    this.mediaQueryList.addEventListener('change', this.mediaQueryListener);
  }

  private handleSystemThemeChange(eventOrList: MediaQueryList | MediaQueryListEvent) {
    const isDark = eventOrList.matches;
    const theme: DeviceTheme = isDark ? 'dark' : 'light';
    this.systemThemeSubject.next(theme);
  }

  private detectSystemTheme(): DeviceTheme {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return isDarkMode ? 'dark' : 'light';
  }

  public getApplicationTheme$(): Observable<DeviceTheme> {
    return this.applicationThemeSubject.asObservable();
  }

  public getSystemTheme$(): Observable<DeviceTheme> {
    return this.systemThemeSubject.asObservable();
  }

  public getSystemTheme(): DeviceTheme {
    return this.systemThemeSubject.value;
  }

  public setApplicationTheme(theme: DeviceTheme): void {
    this.applicationThemeSubject.next(theme);
  }
}
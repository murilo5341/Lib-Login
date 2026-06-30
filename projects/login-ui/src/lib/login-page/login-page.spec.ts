import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage } from './login-page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the dark theme class on the host element', () => {
    const hostElement = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
    const themeToggle = hostElement.querySelector<HTMLButtonElement>('.theme-toggle');

    expect(themeToggle).not.toBeNull();
    expect(hostElement.classList.contains('dark-theme')).toBe(false);

    themeToggle!.click();
    fixture.detectChanges();

    expect(component.isDarkMode).toBe(true);
    expect(hostElement.classList.contains('dark-theme')).toBe(true);

    themeToggle!.click();
    fixture.detectChanges();

    expect(component.isDarkMode).toBe(false);
    expect(hostElement.classList.contains('dark-theme')).toBe(false);
  });
});

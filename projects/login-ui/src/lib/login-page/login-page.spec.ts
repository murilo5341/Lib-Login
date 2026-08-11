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

  it('should toggle password visibility', () => {
    const hostElement = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
    const passwordInput = hostElement.querySelector<HTMLInputElement>('input[name="password"]');
    const toggleButton = hostElement.querySelector<HTMLButtonElement>('.toggle-senha');

    expect(passwordInput).not.toBeNull();
    expect(toggleButton).not.toBeNull();
    expect(passwordInput!.type).toBe('password');

    toggleButton!.click();
    fixture.detectChanges();

    expect(component.mostrarSenha).toBe(true);
    expect(passwordInput!.type).toBe('text');

    toggleButton!.click();
    fixture.detectChanges();

    expect(component.mostrarSenha).toBe(false);
    expect(passwordInput!.type).toBe('password');
  });

  it('should emit login credentials on submit', async () => {
    const emitted: unknown[] = [];
    component.login.subscribe((credentials) => emitted.push(credentials));
    fixture.detectChanges();

    const hostElement = fixture.nativeElement as HTMLElement;
    const usernameInput = hostElement.querySelector<HTMLInputElement>('input[name="username"]');
    const passwordInput = hostElement.querySelector<HTMLInputElement>('input[name="password"]');
    const form = hostElement.querySelector<HTMLFormElement>('form');

    usernameInput!.value = 'murilo';
    usernameInput!.dispatchEvent(new Event('input'));
    passwordInput!.value = '123';
    passwordInput!.dispatchEvent(new Event('input'));
    await fixture.whenStable();

    form!.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    expect(emitted).toEqual([{ username: 'murilo', password: '123' }]);
  });

  it('should emit forgot password when recovery button is clicked', () => {
    let emitted = false;
    component.forgotPassword.subscribe(() => (emitted = true));
    fixture.detectChanges();

    const recoveryButton = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
      '.password-recovery',
    );
    recoveryButton!.click();

    expect(emitted).toBe(true);
  });
});

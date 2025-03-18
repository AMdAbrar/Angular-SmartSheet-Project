import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomepageComponent } from './welcomepage.component';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

fdescribe('WelcomepageComponent', () => {
  let component: WelcomepageComponent;
  let fixture: ComponentFixture<WelcomepageComponent>;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let routerMock: jasmine.SpyObj<Router>;
  let authStatusSubject: BehaviorSubject<boolean>;
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ WelcomepageComponent ]
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(WelcomepageComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  beforeEach(async () => {
    // Creating a BehaviorSubject to mock login status changes
    authStatusSubject = new BehaviorSubject<boolean>(false);

    authServiceMock = jasmine.createSpyObj('AuthService', ['getIsLoggedIn', 'logout'], {
      loggedInStatus$: authStatusSubject.asObservable(), // Use BehaviorSubject
    });
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [WelcomepageComponent],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomepageComponent);
    component = fixture.componentInstance;

    // Mock the initial login state
    authServiceMock.getIsLoggedIn.and.returnValue(false);
    fixture.detectChanges();
  });

  afterEach(() => {
    if (component['authStatusSub']) {
      component['authStatusSub'].unsubscribe();
    }
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isLoggedIn based on AuthService', () => {
    authServiceMock.getIsLoggedIn.and.returnValue(true);
    component.ngOnInit(); // Re-initialize component
    expect(component.isLoggedIn).toBeTrue();
  });

  it('should update isLoggedIn when authService emits new value', () => {
    authStatusSubject.next(true); // Simulate login
    fixture.detectChanges();
    expect(component.isLoggedIn).toBeTrue();

    authStatusSubject.next(false); // Simulate logout
    fixture.detectChanges();
    expect(component.isLoggedIn).toBeFalse();
  });

  it('should unsubscribe from authStatusSub on destroy', () => {
    spyOn(component['authStatusSub']!, 'unsubscribe');
    component.ngOnDestroy();
    expect(component['authStatusSub']!.unsubscribe).toHaveBeenCalled();
  });

  it('should call logout when logged in', () => {
    component.isLoggedIn = true;
    component.toggleLoginLogout();
    expect(authServiceMock.logout).toHaveBeenCalled();
  });

  it('should navigate to login when logged out', () => {
    component.isLoggedIn = false;
    component.toggleLoginLogout();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/Login']);
  });

  it('should toggle dropdown visibility', () => {
    expect(component.isDropdownVisible).toBeFalse();
    component.toggleDropdown();
    expect(component.isDropdownVisible).toBeTrue();
    component.toggleDropdown();
    expect(component.isDropdownVisible).toBeFalse();
  });
});

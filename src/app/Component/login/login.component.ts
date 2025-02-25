import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
// import { LoginService } from 'src/app/Service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit, OnDestroy{
  authStatusSub: any;
  constructor(private router: Router,private authService: AuthService) {}
  @Output() loginSuccessEvent = new EventEmitter<boolean>();
  // Navigate to Welcome Page
  // navigateToWelcome() {
  //   this.router.navigate(['/welcomePage']);
  // }
  // Mock Send Authentication Code
  sendAuthenticationCode() {
    alert('Authentication code sent to your email!');
  }
  botEmail: string = 'abrar@conseroglobal.com';
  botPassword: string = 'abrara';
  showEmailForm = false;
  email: string = '';
  password: string = '';
  passwordFieldType: string = 'password';
  loginSuccess: boolean = false;
  isLoggedIn: boolean | undefined;
  isEmailValid: boolean = true;
  isPasswordValid: boolean = true;
  emailTouched: boolean = false;
  passwordTouched: boolean = false;
  togglePasswordVisibility(): void {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  toggleEmailForm() {
    this.showEmailForm = !this.showEmailForm;
  }
  ngOnInit(): void {
    // Subscribe to login status
    this.authStatusSub = this.authService.loggedInStatus$.subscribe((status) => {
      this.isLoggedIn = status; // Update login state when it changes
    });
  }

  ngOnDestroy(): void {
    if (this.authStatusSub) {
      this.authStatusSub.unsubscribe(); // Unsubscribe when the component is destroyed
    }
  }
  navigateToWelcome() {
    // Implement navigation logic
    console.log('Navigating to Welcome Page...');
  }

  validateEmail() {
    this.emailTouched = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isEmailValid = emailRegex.test(this.email);
  }

  validatePassword() {
    this.passwordTouched = true;

    this.isPasswordValid = this.password.length > 5;
  }
  loginWithEmail(): void {
    // Mock user data: List of valid users
    const mockUsers = [
      { email: 'ravi@conseroglobal.com', password: '123456' },
      { email: 'manny@conseroglobal.com', password: '123456' },
      { email: 'nataraj@conseroglobal.com', password: '123456' },
      { email: 'abrar@conseroglobal.com', password: '123456' },//abrar
      { email: 'shashank@conseroglobal.com', password: '123456' },
      { email: 'varun@conseroglobal.com', password: '123456' }//varun
    ];
  
    // Check if entered credentials match any user in the list
    const validUser = mockUsers.find(user => user.email === this.email && user.password === this.password);
  
    if (validUser) {
      console.log('Login successful!');
  
      // Store user data in localStorage (or sessionStorage)
      localStorage.setItem('user', JSON.stringify({ email: this.email, loggedIn: true }));
  
      // Mock auth service method
      this.authService.login();
  
      // Navigate to another page
      this.router.navigate(['/page']);
    } else {
      console.error('Login failed: Invalid credentials');
      alert('Login failed: Invalid email or password');
    }
  }

  toggleLoginLogout(): void {
    if (this.isLoggedIn) {
      console.log('User logged out');
      this.authService.logout(); // Call the logout method from AuthService
      this.isLoggedIn = false; // Update local state to reflect logged-out status
      this.router.navigate(['/']); // Redirect to the homepage
    }
  }

  redirectToLogin(): void {
    console.log('Redirecting to login form');
    this.router.navigate(['/Login']); // Navigate to the login page
  }

}
import { Component, HostListener,OnDestroy,OnInit,Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Service/auth.service';
import { HomeComponent } from './Component/Internet/home.component';
import { AppComponent1 } from './Component/app1/app.component';
import { AboutPageComponent } from './Component/about-page/about-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title //   document.addEventListener('contextmenu', this.disableRightClick);
    (title: any) {
      throw new Error('Method not implemented.');
  }

// used for view only option
  // implements OnInit, OnDestroy adds this to class name beside

    // private devToolsInterval: any;
  
    // ngOnInit(): void {
    //   // Disable right-click
    //   document.addEventListener('contextmenu', this.disableRightClick);
  
    //   // Disable specific keyboard shortcuts (e.g., F12, Ctrl+Shift+I)
    //   document.addEventListener('keydown', this.disableShortcuts);
  
    //   // Detect if Developer Tools are open
    //   this.devToolsInterval = setInterval(() => {
    //     this.detectDevTools();
    //   }, 1000);
    // }
  
    // ngOnDestroy(): void {
    //   // Cleanup listeners when the component is destroyed
    //   document.removeEventListener('contextmenu', this.disableRightClick);
    //   document.removeEventListener('keydown', this.disableShortcuts);
  
    //   // Cleanup the developer tools detection interval
    //   clearInterval(this.devToolsInterval);
    // }
  
    // // Method to disable right-click
    // private disableRightClick(event: MouseEvent): void {
    //   event.preventDefault();
    // }
  
    // // Method to disable specific keyboard shortcuts (F12, Ctrl+Shift+I)
    // private disableShortcuts(event: KeyboardEvent): void {
    //   if (
    //     event.keyCode === 123 || // F12
    //     (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74)) // Ctrl+Shift+I or Ctrl+Shift+J
    //   ) {
    //     event.preventDefault();
    //   }
    // }
  
    // // Method to detect if Developer Tools are open
    // private detectDevTools(): void {
    //   const isDevToolsOpen = window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100;
  
    //   if (isDevToolsOpen) {
    //     alert('Developer Tools Detected!');
    //     // You could also perform other actions like redirecting or alerting the user
    //     // window.location.href = "about:blank"; // Example of redirecting away
    //   }
    // }
}
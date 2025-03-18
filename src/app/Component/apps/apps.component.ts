import { Component } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent {
  options = ['Consero General Quick Links', 'US Admin', 'Human Resources', 'Delivery', 'Professional Services Group', 'Sales & Marketing', 'Product'];
  selectedOption: string | null = this.options[0];  // Set the first option by default
  selectedSubOption: 'internet' | 'gdrive' | null = 'internet'; 
  ngOnInit() {
    this.selectedOption = this.options[0];  // Ensure the first option is selected initially
    this.selectedSubOption = 'internet';  // Show 'internet' tab by default
  }
  selectOption(option: string) {
    this.selectedOption = option;
    this.selectedSubOption = 'internet';  // Reset to 'internet' when a new option is selected
  }
  // options = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  links: Record<string, { internet: { name: string; url: string; }[]; gdrive: { name: string; url: string; }[] }> = {
    "Consero General Quick Links": {
      internet: [
        { name: "Consero Global", url: "https://www.nopcommerce.com/en/demo-link" },
        { name: "SIMPL", url: "https://www.jointjs.com/demos/links" },
        { name: "Chorus", url: "https://www.jointjs.com/demos/links" },
        { name: "Nexonia T&E", url: "https://www.jointjs.com/demos/links" },
        { name: "Khorus", url: "https://www.jointjs.com/demos/links" },
  
  
      ],
      gdrive: [
        { name: "G-Drive", url: "https://forums.envato.com/t/demo-url/485454" },
        // { name: "Navattic Demo", url: "https://www.navattic.com/blog/click-through-demo" }
      ],
    },
    "US Admin": {
      internet: [
        { name: "Landingfolio Demo", url: "https://www.landingfolio.com/components/demo" },
        { name: "Tink Demo", url: "https://demo.tink.com/" }
      ],
      gdrive: [
        { name: "Supademo", url: "https://supademo.com/" },
        { name: "OceanWP Demo", url: "https://oceanwp.org/demos/" }
      ],
    },
    "Human Resources": {
      internet: [
        { name: "Blackline", url: "https://example.com/internetC1" },
        { name: "Client Success Survey", url: "https://example.com/internetC2" }
      ],
      gdrive: [
        { name: "Google Drive C1", url: "https://drive.google.com/C1" },
        { name: "Google Drive C2", url: "https://drive.google.com/C2" }
      ],
    },
    "Delivery": {
      internet: [
        { name: "Demo D1", url: "https://example.com/d1" },
        { name: "Demo D2", url: "https://example.com/d2" }
      ],
      gdrive: [
        { name: "Drive D1", url: "https://drive.google.com/D1" },
        { name: "Drive D2", url: "https://drive.google.com/D2" }
      ],
    },
    "Professional Services Group": {
      internet: [
        { name: "Example E1", url: "https://example.com/internetE1" },
        { name: "Example E2", url: "https://example.com/internetE2" }
      ],
      gdrive: [
        { name: "Google Drive E1", url: "https://drive.google.com/E1" },
        { name: "Google Drive E2", url: "https://drive.google.com/E2" }
      ],
    },
    "Sales & Marketing": {
      internet: [
        { name: "Example F1", url: "https://example.com/internetF1" },
        { name: "Example F2", url: "https://example.com/internetF2" }
      ],
      gdrive: [
        { name: "Google Drive F1", url: "https://drive.google.com/F1" },
        { name: "Google Drive F2", url: "https://drive.google.com/F2" }
      ],
    },
    "Product": {
      internet: [
        { name: "Example G1", url: "https://example.com/internetG1" },
        { name: "Example G2", url: "https://example.com/internetG2" }
      ],
      gdrive: [
        { name: "Google Drive G1", url: "https://drive.google.com/G1" },
        { name: "Google Drive G2", url: "https://drive.google.com/G2" }
      ],
    }
  };

  // selectOption(option: string) {
  //   this.selectedOption = option;
  //   this.selectedSubOption = null; // Reset selection
  // }

  goBack() {
    this.selectedOption = null;
    this.selectedSubOption = null;
  }}
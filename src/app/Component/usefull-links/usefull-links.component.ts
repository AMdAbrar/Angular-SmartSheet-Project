import { Component } from '@angular/core';

@Component({
  selector: 'app-usefull-links',
  templateUrl:'./usefull-links.component.html',
  styleUrls: ['./usefull-links.component.css']
})  
export class UsefullLinksComponent {
  selectedOption: string | null = null;
selectedSubOptions: { [key: string]: string | null } = {};

options = ['Consero General Quick Links', 'US Admin', 'Human Resources', 'Delivery', 'Professional Services Group', 'Sales & Marketing', 'Product'];

// Define separate Internet and GDrive links for each option
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
      { name: "Navattic Demo", url: "https://www.navattic.com/blog/click-through-demo" }
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
      { name: "Example C1", url: "https://example.com/internetC1" },
      { name: "Example C2", url: "https://example.com/internetC2" }
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

selectOption(option: string) {
  this.selectedOption = option;
}

toggleSubOption(option: string, subOption: string | null) {
  if (!subOption) {
    // If null is passed, remove the selection
    delete this.selectedSubOptions[option];
  } else if (this.selectedSubOptions[option] === subOption) {
    // If clicking the same button, hide the sub-option
    delete this.selectedSubOptions[option];
  } else {
    // Show only the selected sub-option
    this.selectedSubOptions[option] = subOption;
  }
}



goBack() {
  // Reset everything including buttons and selected option
  this.selectedOption = null;
  this.selectedSubOptions = {};
}

}
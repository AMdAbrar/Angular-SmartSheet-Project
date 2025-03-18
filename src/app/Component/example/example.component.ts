import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  categories = [
    {
      id: 1,
      name: "Consero General Quick Link",
      description: "General resources and quick links",
      internet: ["Consero Global", "SIMPL", "Nexonia T&E", "Chorus", "Sales Force", "Khorus"],
      gdrive: [
        "G-Drive File Index",
        "Monthly Reports",
        "Team Documents",
        "Project Templates",
        "Meeting Notes",
        "Shared Resources",
      ],
    },
    {
      id: 2,
      name: "Delivery",
      description: "Delivery resources and documentation",
      internet: [
        "Blackline",
        "Client Success Survey",
        "Delivery Portal",
              ],
      gdrive: [
        "Monthly KPIs",
        "Overage Billings",
              ],
    },
    {
      id: 3,
      name: "Professional Service Group",
      description: "PSG tools and resources",
      internet: [
        "Bill.com API Site",
        "Intact API Site",
        "Intact Market Place",
        "Training: Power BI",
        "One View Report",
        "Service Portal",
      ],
      gdrive: [
        "G-Drive File Index",
        "Service Templates",
              ],
    },
    {
      id: 4,
      name: "Human Resources",
      description: "HR tools and resources",
      internet: [
        "TriNet (HR)",
        "Benefits Portal",
        "Learning Management",
        "Performance Reviews",
        "Job Postings",
        "HR Policies",
      ],
      gdrive: [
        "India Holidays",
        "North America Holidays",
        "HR Forms",
        "Onboarding Materials",
        "Company Policies",
        "Team Directory",
      ],
    },
    {
      id: 5,
      name: "Sales & Marketing",
      description: "Sales and marketing resources",
      internet: [
        "Consero Offering Video",
        "Marketing Portal",
        "Sales Dashboard",
        "Lead Management",
        "Campaign Tracker",
        "Analytics Dashboard",
      ],
      gdrive: [
        "Assessment Documentation",
        "Branding Templates",
        "Client Contracts",
        "Quote Rates",
        "Marketing Materials",
        "Sales Presentations",
      ],
    },
    {
      id: 6,
      name: "US Admin",
      description: "US administration resources",
      internet: [
        "Admin Portal",
        "Facility Management",
        "Equipment Requests",
        "Office Policies",
        "Travel Booking",
        "Expense Reports",
      ],
      gdrive: [
        "Meeting Cadence",
        "Acronyms",
        "Admin Templates",
        "Office Documentation",
        "Process Guides",
        "Contact Directory",
      ],
    },
    {
      id: 7,
      name: "Technology",
      description: "Technology resources and tools",
      internet: [
        "Tech Support Portal",
        "Software Licenses",
        "System Status",
        "Knowledge Base",
        "Training Resources",
        "Security Guidelines",
      ],
      gdrive: [
        "Product Request Form",
        "Product Fact Sheet",
        "System Documentation",
        "Tech Roadmap",
        "Architecture Diagrams",
        "Security Policies",
      ],
    },
  ]
  // State for expanded cards
  expandedCards: { [key: number]: boolean } = {}
  // State for active tabs
  activeTab: { [key: number]: string } = {}
  constructor() {}
  ngOnInit(): void {
    // Initialize all cards as collapsed
    this.categories.forEach((category) => {
      this.expandedCards[category.id] = false
      this.activeTab[category.id] = "internet"
    })
  }
  toggleCard(categoryId: number, defaultTab: string): void {
    // Collapse all other cards before expanding the selected one
    Object.keys(this.expandedCards).forEach((key) => {
      if (+key !== categoryId) {
        this.expandedCards[+key] = false;
      }
    });
  
    // Toggle only the selected card
    this.expandedCards[categoryId] = !this.expandedCards[categoryId];
  
    // If expanded, set the active tab
    if (this.expandedCards[categoryId]) {
      this.activeTab[categoryId] = defaultTab;
    }
  }
  setActiveTab(categoryId: number, tab: string): void {
    this.activeTab[categoryId] = tab;
  }  

}

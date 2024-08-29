import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent], // Use CommonModule here
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'], // Corrected property name
})
export class AboutComponent implements OnInit {
  projects: any[] = []; // Array to hold project data
  showEduction: boolean = true;
  showProjects: boolean = true;
  constructor(
    public router: Router,
    private sharedDataService: SharedDataService // Adjusted naming convention
  ) {}

  ngOnInit(): void {
    this.loadData(); // Load the data when the component is initialized
  }

  loadData() {
    this.sharedDataService.getData().subscribe(
      (response: any) => {
        // Assuming the response has a `projects` field that holds an array of projects
        this.projects = response.result || []; // Populate the projects array
      },
      (error) => {
        console.error('Error loading projects:', error);
      }
    );
  }

    // Helper method to get the image URL
    getImageUrl(filename: string): string {
      // Adjust the base URL according to your backend URL
      return `http://localhost:5000/${filename}`;
    }
  onHome() {
    this.router.navigate(['./portfolio-website/home']);
  }

  onContact() {
    this.router.navigate(['./portfolio-website/contact']);
  }
}

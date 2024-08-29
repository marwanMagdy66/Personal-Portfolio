import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { NgFor, NgIf } from '@angular/common';
import { SharedDataService } from '../services/shared-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    NgFor,
    HttpClientModule,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{
  skills:any[]=[];
  constructor(private sharedDataService: SharedDataService) {}
  ngOnInit(): void {
    this.loadData(); // Load the data when the component is initialized
  }

  loadData() {
    this.sharedDataService.getData().subscribe(
      (response: any) => {
        this.skills = response.result || []; // Populate the projects array
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
}

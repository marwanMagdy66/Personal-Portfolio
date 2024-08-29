import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { Router } from '@angular/router';
import { DeleteProjectsService } from '../services/delete-projects.service';
import { DeleteSkillsService } from '../services/delete-skills.service';
import { AuthAdminService } from '../services/auth-admin.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  ///skilllls//////
  skills: any[] = [];
  projects: any[] = [];

  constructor(
    private sharedDataService: SharedDataService,
    public router: Router,
    private DeleteProjectsService: DeleteProjectsService,
    private DeleteSkillsService: DeleteSkillsService,
    private tokenAuth: AuthAdminService
  ) {}
  ngOnInit(): void {
    this.loadData(); // Load the data when the component is initialized
  }

  loadData() {
    this.sharedDataService.getData().subscribe(
      (response: any) => {
        this.skills = response.result || []; // Populate the projects array
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

  add() {
    this.router.navigate(['./portfolio-website/add']);
  }
  ////////delete operation/////////
  deleteSkill(id: any) {
    this.DeleteSkillsService.deleteSkill(id).subscribe(
      (response: any) => {
        console.log(response);
        this.loadData();
      },
      (error) => {
        console.error('Error deleting project:', error);
      }
    );
  }

  deleteProject(id: any) {
    this.DeleteProjectsService.deleteProject(id).subscribe(
      (response: any) => {
        console.log(response);
        this.loadData();
      },
      (error) => {
        console.error('Error deleting project:', error);
      }
    );
  }

  ///////////////edit operation ////////////////////

  editSkill(id: any) {
    this.router.navigate([`/portfolio-website/edit_skill/${id}`]);
  }

  editProject(id: any) {
    console.log(`Navigating to: /portfolio-website/edit_project/${id}`);

    this.router.navigate([`/portfolio-website/edit_project/${id}`]);
  }
}

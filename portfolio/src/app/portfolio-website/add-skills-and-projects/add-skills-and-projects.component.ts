import { Component } from '@angular/core';
import { UpdateInfoService } from '../services/update-info.service';
import { AuthAdminService } from '../services/auth-admin.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-skills-and-projects',
  standalone: true,
  imports: [FormsModule,NgIf,HttpClientModule],
  templateUrl: './add-skills-and-projects.component.html',
  styleUrl: './add-skills-and-projects.component.scss'
})
export class AddSkillsAndProjectsComponent {
  data: any[] = []; // Define the data array to store multiple responses
      successMessage: string | null = null; // Property for success message

  constructor(
    private updateInfoService: UpdateInfoService,
    private tokenAuth: AuthAdminService
  ) {}

  onSubmit(form: NgForm) {
    const formData = new FormData();

    // Append the form data
    formData.append('description', form.value.description);
    formData.append('skillName', form.value.skillName);
    formData.append('skillDetails', form.value.skillDetails);
    formData.append('projectName', form.value.projectName);
    formData.append('projectDetails', form.value.projectDetails);

    // Append files if they exist
    const skillImage = (
      document.getElementById('skillImage') as HTMLInputElement
    ).files?.[0];
    const projectImage = (
      document.getElementById('projectImage') as HTMLInputElement
    ).files?.[0];

    if (skillImage) {
      formData.append('skill', skillImage);
    }

    if (projectImage) {
      formData.append('project', projectImage);
    }

    const token = this.tokenAuth.getToken();

    // Use the service to submit the form data
    this.updateInfoService.updateInfo(formData, token).subscribe(
      (response: any) => {
        console.log('Form submitted successfully:', response);

        // Add new response data to the existing data array
        this.data.push({
          summary: response.result.summary,
          skillName: response.result.skillName,
          skillDetails: response.result.skillDetails,
          skillPic: response.result.skillPic,
          projectName: response.result.projectName,
          projectDetails: response.result.projectDetails,
          projectPic: response.result.projectPic,
        });

        console.log('Updated data:', this.data);

        // Set success message
        this.successMessage = 'Data updated successfully';

        // Optionally, clear the message after some time
        setTimeout(() => {
          this.successMessage = null;
        }, 5000); // Clears the message after 5 seconds


        form.resetForm();
        (document.getElementById('skillImage') as HTMLInputElement).value = '';
        (document.getElementById('projectImage') as HTMLInputElement).value = '';
      },
      (error: HttpErrorResponse) => {
        console.error('Error', error);
      }
    );
  }

  getUpdatedData() {
    return this.data;
  }
}

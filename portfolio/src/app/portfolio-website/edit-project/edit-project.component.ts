import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
})
export class EditProjectComponent implements OnInit {
  projectName: string = '';
  projectDetails: string = '';
  projectPic: File | null = null;
  id: string | null = null;
  successMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.projectPic = file;
  }

  updateProject(): void {
    const formData = new FormData();
    formData.append('projectName', this.projectName);
    formData.append('projectDetails', this.projectDetails);
    if (this.projectPic) {
      formData.append('project', this.projectPic);
    }

    this.sharedDataService.updateProject(this.id, formData)
      .subscribe(
        (response) => {
          this.successMessage = 'Project updated successfully!';
          console.log(response);
        this.projectName='';
        this.projectDetails='';
        this.projectPic=null;

        },
        (err) => console.log(err)
      );
  }
}

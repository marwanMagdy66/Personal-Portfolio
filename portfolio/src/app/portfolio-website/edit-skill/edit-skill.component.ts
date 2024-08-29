import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { SharedDataService } from '../services/shared-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-skill',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-skill.component.html',
  styleUrl: './edit-skill.component.scss'
})
export class EditSkillComponent implements OnInit  {
  skillName: string = '';
  skillDetails: string = '';
  skillPic: File | null = null;
  id: string | null = null;
  successMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private sharedDataService: SharedDataService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.skillPic = file;
  }

  updateSkill(): void {
    const formData = new FormData();
    formData.append('skillName', this.skillName);
    formData.append('skillDetails', this.skillDetails);
    if (this.skillPic) {
      formData.append('skill', this.skillPic);
     }

    this.sharedDataService.updateSkill(this.id, formData)
      .subscribe(
        (response) => {
          this.successMessage = 'Skill updated successfully!';
          console.log(response);
        this.skillName='';
        this.skillDetails='';
        this.skillPic=null;

        },
        (err) => console.log(err)
      );
  }
}

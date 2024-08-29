import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { PortfolioWebsiteRoutingModule } from './portfolio-website-routing.module';
import { AuthAdminService } from './services/auth-admin.service';
import { UpdateInfoService } from './services/update-info.service';
import { SharedDataService } from './services/shared-data.service';
import { AuthGuard } from './guards/auth.guard';
import { SendEmailsService } from './services/send-emails.service';
import { DeleteProjectsService } from './services/delete-projects.service';
import { DeleteSkillsService } from './services/delete-skills.service';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditSkillComponent } from './edit-skill/edit-skill.component';

@NgModule({
  declarations: [
    LoginComponent,

      // Declare here if used within this module
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PortfolioWebsiteRoutingModule,

  ],
  providers: [
    AuthAdminService,
    UpdateInfoService,
    SharedDataService,
    SendEmailsService,
    HttpClientModule,
    AuthGuard,
    DeleteSkillsService,
    DeleteProjectsService,
  

  ],
})
export class PortfolioWebsiteModule {}

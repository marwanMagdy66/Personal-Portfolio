import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { AddSkillsAndProjectsComponent } from './add-skills-and-projects/add-skills-and-projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditSkillComponent } from './edit-skill/edit-skill.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add',
    component: AddSkillsAndProjectsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit_project/:id',
    component: EditProjectComponent
  },
  {
    path: 'edit_skill/:id',
    component: EditSkillComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioWebsiteRoutingModule {}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
constructor(public router:Router){}
  onHome(){
this.router.navigate(['./portfolio-website/home'])
}
onSkills(){
 const skillsSelection=document.getElementById('skills')
 if (skillsSelection) {
  skillsSelection.scrollIntoView({behavior:'smooth',block:'start'})
 }

}
onContact(){
  const contactSelection=document.getElementById('contact')
  if (contactSelection) {
    contactSelection.scrollIntoView({behavior:'smooth',block:'start'})
  }

}
onEducation(){
  const eduSelection=document.getElementById('education')
  if (eduSelection) {
    eduSelection.scrollIntoView({behavior:'smooth',block:'start'})
  }

}
onProjects(){
  const projectSelection=document.getElementById('projects')
  if (projectSelection) {
    projectSelection.scrollIntoView({behavior:'smooth',block:'start'})
  }

}
onLogin(){
  this.router.navigate(['./portfolio-website/login'])
}
}

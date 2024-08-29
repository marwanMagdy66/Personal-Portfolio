import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
   linkedIn="https://www.linkedin.com/in/marwan-magdy-31a619232/"
   email='marwanmagdy826@gmail.com'
   faceBook='https://www.facebook.com/profile.php?id=100009113395273&mibextid=ZbWKwL'
  constructor(public router:Router){}
  onHome(){
window.scrollTo({top:0,behavior:'smooth'})
  }
onContact(){
  this.router.navigate(['./portfolio-website/contact'])

}
onAbout(){
  this.router.navigate(['./portfolio-website/about'])

}
}

import { Component } from '@angular/core';
import { AuthAdminService } from '../services/auth-admin.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  dataReceive: any;

  constructor(private asd: AuthAdminService,public router:Router) {} // Dependency injection

  onSubmit(f: any) {
    let data = f.value;
    this.asd.login(data).subscribe(
      (response) => {
        this.dataReceive = response;
        this.asd.saveData(
          this.dataReceive.token,
          this.dataReceive.name,
          this.dataReceive.email
        );
        this.router.navigate(['./portfolio-website/dashboard'])
      },
      (err) => console.log(err)
    );
  }
}

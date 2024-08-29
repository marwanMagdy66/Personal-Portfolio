import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { SendEmailsService } from '../services/send-emails.service';
import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
} from '@angular/common/http';
import { HomeComponent } from '../home/home.component';
import { error } from 'console';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    FormsModule,
    HttpClientModule,
    HomeComponent,
    NgIf,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private SendEmailsService: SendEmailsService) {}

  formData: any = {
    email: '',
    newMessage: '',
  };
  successMessage: string | null = null; // Property for success message

  onSubmit() {
    this.SendEmailsService.sendEmail(
      this.formData.email,
      this.formData.newMessage
    ).subscribe(
      (response) => {
        console.log(response);
        this.successMessage = 'Your Message Sent Successfully';

      this.formData.email = '';
      this.formData.newMessage = '';

        setTimeout(() => {
          this.successMessage = null;
        }, 5000);
      },
      (error) => console.log(error)
    );

  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted successfully!', form.value);
      // Here you can handle form submission, like sending data to a server
    } else {
      console.error('Form is invalid!');
    }
  }
}

import { Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const routes: Routes = [
    {
        path: 'template-form',
        component: TemplateFormComponent
      },
      {
        path: 'reactive-form',
        component:ReactiveFormComponent
      },
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';



export const routes: Routes = [
    
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent},
    {path:'welcome',component:WelcomeComponent,canActivate:[AuthGuard]},
    { path: 'login', component: LoginComponent },
    {path:'logout',component:LogoutComponent},
    {path:'contact-us',component:ContactUsComponent,canActivate: [AuthGuard]}
];

import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ClassifierComponent } from './views/classifier/classifier.component';
import { UsComponent } from './views/us/us.component';
import { ContactComponent } from './views/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nosotros', component: UsComponent },
    { path: 'contactanos', component: ContactComponent },
    { path: '**', redirectTo: '' },
];

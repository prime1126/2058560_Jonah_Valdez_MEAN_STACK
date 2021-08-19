import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ContactsComponent } from "./contacts/contacts.component";

const routes: Routes = [
    {path: 'Login',component: LoginComponent},
    {path: 'Register',component: RegisterComponent},
    {path: 'contacts',component: ContactsComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class AppRoutingModule{}
export const routingComponents = [LoginComponent,RegisterComponent,ContactsComponent]
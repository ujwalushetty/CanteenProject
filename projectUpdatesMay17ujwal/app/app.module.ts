import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmploySearchComponent } from './employ-search/employ-search.component';
import { EmployComponent } from './employ/employ.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';



const appRoutes : Routes = [
  {path:'',component:LoginComponent},
    {path:'menu',component:MenuComponent,
 
      children : [
    {path:'user',component:UserComponent,outlet:'data'},
  {path:'employ',component:EmployComponent,outlet:'data'},
  {path:'employsearch',component:EmploySearchComponent,outlet:'data'},
  ]
}
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmploySearchComponent,
    EmployComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

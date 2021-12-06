import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'post', component: AddPostComponent },
  { path: 'chat', component: ChatComponent },
  { path: '', component: LoginComponent }, 
  { path: 'internews', component: TopheadingComponent },
  { path: 'innews', component: TechnewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

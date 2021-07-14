import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { VideoDetailComponent } from './pages/video-detail/video-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormVideoComponent } from './components/form-video/form-video.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { HttpClientModule } from "@angular/common/http";
import { VideosServices } from './services/videos.services'
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { EditVideoComponent } from './components/edit-video/edit-video.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent,
    NavigationComponent,
    VideoCardComponent,
    VideoDetailComponent,
    PageNotFoundComponent,
    FormVideoComponent,
    FormLoginComponent,
    EditVideoComponent,
    LoginPageComponent,
    RegisterPageComponent,
    FormRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [VideosServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

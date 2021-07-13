import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoDetailComponent } from './pages/video-detail/video-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormVideoComponent } from './components/form-video/form-video.component';
import { EditVideoComponent } from './components/edit-video/edit-video.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-video', component: FormVideoComponent},
  {path: 'edit-video/:id', component: EditVideoComponent},
  {path: 'video/:id', component: VideoDetailComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { VideosServices } from '../../services/videos.services';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-video',
  templateUrl: './form-video.component.html',
  styleUrls: ['./form-video.component.css']
})
export class FormVideoComponent implements OnInit {

  videoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    miniatura: new FormControl(''),
    user_image: new FormControl(''),
    duration: new FormControl(''),
    datetime: new FormControl(''),
    status: new FormControl(''),
  });

  constructor(
    private videosServices: VideosServices,
  ) { }

  ngOnInit(): void {


  }

  submit(form:any){
    console.log(form)

    this.videosServices.postVideo(form)
    .then(response => console.log(response) )
  }

  edit(form:any){
    console.log(form)

    this.videosServices.putVideo(form, 13)
    .then(response => console.log(response) )
  }

}

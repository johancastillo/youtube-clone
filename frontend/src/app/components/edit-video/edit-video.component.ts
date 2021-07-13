import { Component, OnInit } from '@angular/core';
import { VideosServices } from '../../services/videos.services';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent implements OnInit {

  public id: any;

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
    private route:ActivatedRoute,
    private videosServices: VideosServices,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
    });

  }

  submit(form:any){
    console.log(form)

    this.videosServices.putVideo(form, this.id)
    .then(response => console.log(response) )
  }


}

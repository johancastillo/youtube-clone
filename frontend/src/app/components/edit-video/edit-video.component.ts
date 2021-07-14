import { Component, OnInit } from '@angular/core';
import { VideosServices } from '../../services/videos.services';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent implements OnInit {

  public id: any;
  public video: any;

  public videoForm:any;

  constructor(
    private route:ActivatedRoute,
    private videosServices: VideosServices,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
    });

    this.videosServices.getOneVideo(this.id)
    .then(response => {
      this.video = response
      //console.log(response)
    })

    this.videoForm = new FormGroup({
      title: new FormControl(``, Validators.required),
      description: new FormControl(''),
      miniatura: new FormControl(''),
      url: new FormControl(''),
      user_image: new FormControl(''),
      duration: new FormControl(''),
      datetime: new FormControl(''),
      status: new FormControl(''),
    });

  }

  ngOnChanges():void{
    console.log(this.video)
  }

  submit(form:any){
    console.log(form)

    this.videosServices.putVideo(form, this.id)
    .then(response => {
      console.log(response)



      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se editó correctamente',
        showConfirmButton: false,
        timer: 1500
      });

      setTimeout(() => {
        window.location.href = "/";
      }, 1800);

    });

  }


}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosServices } from '../../services/videos.services';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  @ViewChild("video") videoEl: ElementRef;

  public id: any;
  public video: any;

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
      this.video = response;

      //console.log(response);
    });

  }


  deleteVideo(){

    Swal.fire({
      title: '¿Estás seguro de eliminar este video?',
      text: "¡Si lo haces, no podras recuperarlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.videosServices.deleteVideo(this.id)
        .then(response => {

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Se ha eliminado el video correctamente`,
            showConfirmButton: false,
            timer: 1500
          });

          setTimeout(() => {
            window.location.href = "/";
          }, 1800);

        });




      }
    })



  }


}

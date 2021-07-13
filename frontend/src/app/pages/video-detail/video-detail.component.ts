import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosServices } from '../../services/videos.services';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  public id: any;
  public video: any;

  constructor(
    private route:ActivatedRoute,
    private videosServices: VideosServices
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
    });

    this.videosServices.getOneVideo(this.id)
    .then(response => this.video = response )

  }



}

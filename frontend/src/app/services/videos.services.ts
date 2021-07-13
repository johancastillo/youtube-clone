import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";




@Injectable({
  providedIn: 'root'
})
export class VideosServices{

  public server:any = "http://10.10.20.148:8000/api";

  constructor(
    private http: HttpClient
  ){
    console.log('en el constructor de services');

  }

  getAllVideos(){
      return this.http.get(`${this.server}/videos`).toPromise();
  }


  getOneVideo(id:any){
      return this.http.get(`${this.server}/videos/${id}`).toPromise();
  }



}

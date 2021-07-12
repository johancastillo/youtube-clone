import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public data: any = [
    {miniatura: "assets/images/01.jpg", duration: "3:00", userImage: "https://yt3.ggpht.com/ytc/AKedOLQKWZouCzx15GWTKF6cnoqE86dFknpb7pVusF6oHg=s48-c-k-c0x00ffffff-no-rj", title: "Cómo los cibercriminales utilizan el Big Data y la Inteligencia Artificial en 2021 por Chema Alonso.", description: "“Memories” is out now:",  datetime: "Hace 2 años"},
    {miniatura: "assets/images/01.jpg", duration: "3:00", userImage: "https://yt3.ggpht.com/SqOtO2gSud-edpOhMxpXUSoDMiOfA5hVVCiq5zGXIy-FBwgQu3PCETrGZ0fIUaEtaAAW6YcjgSg=s68-c-k-c0x00ffffff-no-rj", title: "Maroon 5 - Memories (Official Video)", description: "“Memories” is out now:",  datetime: "Hace 2 años"},
    {miniatura: "assets/images/01.jpg", duration: "3:00", userImage: "https://yt3.ggpht.com/ytc/AKedOLToU1sSfIWU5xGmwyGTWqP9iqY4MlgRolTMbTQeqg=s68-c-k-c0x00ffffff-no-rj", title: "¿Se puede aprender inglés en Platzi? 🤔", description: "“Memories” is out now:",  datetime: "Hace 2 años"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

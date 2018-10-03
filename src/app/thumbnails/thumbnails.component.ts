import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent implements OnInit {

  img: object[] = [
    {
      class: "carousel-item active",
      bg: "../assets/pocketpark.png",
      text: "Sorry, coming soon!",
      link: "http://pocketpark.cameronleeritchie.com/"
    },
    {
      class: "carousel-item",
      bg: "...",
      text: "Sorry, coming soon!",
      link: "#",
    },
    {
      class: "carousel-item",
      bg: "...",
      text: "Sorry, coming soon!",
      link: "#"
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}

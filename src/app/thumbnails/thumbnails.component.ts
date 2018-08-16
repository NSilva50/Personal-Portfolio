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
      bg: "...",
      text: "Sorry, coming soon!",
    },
    {
      class: "carousel-item",
      bg: "...",
      text: "Sorry, coming soon!",
    },
    {
      class: "carousel-item",
      bg: "...",
      text: "Sorry, coming soon!"
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'This is the Good Stuff';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://st3.depositphotos.com/thumbs/13194036/image/18562/185623840/api_thumb_450.jpg'
  image3 = 'https://st.depositphotos.com/thumbs/1009092/image/4149/41494311/api_thumb_450.jpg';

  constructor() { }

  ngOnInit() {
  }

}
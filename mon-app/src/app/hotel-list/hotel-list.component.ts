import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['../app.component.css'],
})
export class HotelListComponent {
  public title = 'Liste des Hotels';

  public hotels: any[] = [
    {
      hotelId: 1,
      hotelName: 'Buena Sweet',
      description: 'Belle hotel',
      price: 220,
      imageUrl: 'assets/img/hotel-room.jpg',
    },
    {
      hotelId: 2,
      hotelName: 'Marakech',
      description: 'vue jolie',
      price: 220,
      imageUrl: 'assets/img/indoors.jpg',
    },
    {
      hotelId: 3,
      hotelName: 'Buena Sweet',
      description: 'Jolie Sweet',
      price: 220,
      imageUrl: 'assets/img/the-interior.jpg',
    },
    {
      hotelId: 4,
      hotelName: 'Aldiana',
      description: 'Fenetre',
      price: 220,
      imageUrl: 'assets/img/window.jpg',
    },
  ];
}

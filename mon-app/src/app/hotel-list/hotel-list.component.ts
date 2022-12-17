import { Component, OnInit } from '@angular/core';
import { IHotel } from './hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
})
export class HotelListComponent implements OnInit {
  public title = 'Liste des Hotels';

  public hotels: IHotel[] = [
    {
      hotelId: 1,
      hotelName: 'Buena Sweet',
      description: 'Belle hotel',
      price: 220,
      imageUrl: 'assets/img/hotel-room.jpg',
      rating: 3.5,
    },
    {
      hotelId: 2,
      hotelName: 'Marakech',
      description: 'vue jolie',
      price: 220,
      imageUrl: 'assets/img/indoors.jpg',
      rating: 5,
    },
    {
      hotelId: 3,
      hotelName: 'Buena Sweet',
      description: 'Jolie Sweet',
      price: 220,
      imageUrl: 'assets/img/the-interior.jpg',
      rating: 4,
    },
    {
      hotelId: 4,
      hotelName: 'Aldiana',
      description: 'Fenetre',
      price: 220,
      imageUrl: 'assets/img/window.jpg',
      rating: 2.5,
    },
  ];

  public showBadge: boolean = false;

  private _hotelFilter = 'Mot';

  public filteredHotels: IHotel[] = [];

  public receivedRating: string = '';

  ngOnInit(): void {
    this.filteredHotels = this.hotels;
    this.hotelFilter = '';
  }

  public toggleIsNewBadge() {
    this.showBadge = !this.showBadge;
  }

  public get hotelFilter(): string {
    return this._hotelFilter;
  }

  public set hotelFilter(filter: string) {
    this._hotelFilter = filter;

    this.filteredHotels = this.hotelFilter
      ? this.filterHotels(this.hotelFilter)
      : this.hotels;
  }

  private filterHotels(criteria: string): IHotel[] {
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel: IHotel) =>
        hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !== -1
    );
    return res;
  }

  public receiveRatingClicked(message: string): void {
    this.receivedRating = message;
  }
}

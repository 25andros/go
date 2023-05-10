import { Injectable } from '@angular/core';
import { dogs } from './dogs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor() { }

  dogs =[
      {
        id: 1,
        name: 'Kona',
        breed: 'Boston Terrier',
        age: 12,
        nature: 'indeterminate',
        photo: "../../../assets/images/kona3.jpg",
        description: "Wall eye, looking for some food.",
        nickname: "Big K",
        likes: 1,
      },
      {
        id: 2,
        name: 'Abby',
        breed: 'Boston Terrier',
        age: 10,
       nature: 'affectionate',
        photo: '../../../assets/images/abby2.jpg',
        description: "A wet dog after a swim",
        nickname: "little Abs",
        likes: 1,
      },
      {
        id: 3,
        name: 'Mateo',
        breed: 'Boston Terrier',
        age: 14,
        nature: 'stinky',
        photo: '../../../assets/images/mateo2.jpg',
        description: "A dog and his special flower",
        nickname: "Mateo the Great",
        likes: 1,
      }
  ]

  getDogs(): dogs[] {
    return [

      {
        id: 1,
        name: 'Kona',
        breed: 'Boston Terrier',
        age: 12,
        nature: 'indeterminate',
        photo: "../../../assets/images/kona3.jpg",
        description: "Wall eye, looking for some food.",
        nickname: "Big K",
        likes: 1,
      },
      {
        id: 2,
        name: 'Abby',
        breed: 'Boston Terrier',
        age: 10,
       nature: 'affectionate',
        photo: '../../../assets/images/abby2.jpg',
        description: "A wet dog after a swim",
        nickname: "little Abs",
        likes: 1,
      },
      {
        id: 3,
        name: 'Mateo',
        breed: 'Boston Terrier',
        age: 14,
        nature: 'stinky',
        photo: '../../../assets/images/mateo2.jpg',
        description: "A dog and his special flower",
        nickname: "Mateo the Great",
        likes: 1,
      }

    ];


  }



}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WheelService {

  constructor() { }

  wheel = [

    {
      name: '700c',
      size: 622,
    },

    {
      name: '650b',
      size: 584,
    },

    {
      name: '26"',
      size: 559,
    },
  ];
}

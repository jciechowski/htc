import { Players } from '../players-list/players';

export interface TeamEvent {
  id?: string;
  title: string;
  place: string;
  date: Date;
  price?: number;
  attendance: Attendance;
  facebook?: string;
}

interface Attendance {
  man: number;
  woman: number;
  tbd: number;
}

export const TeamEvents = [
  {
    title: 'Jabłka',
    place: 'Gdańsk',
    date: new Date(),
    time: new Date().getHours(),
    price: 100,
    attendance: { man: 0, woman: 0, tbd: Players.length }
  },
  {
    title: 'Jabłka',
    place: 'Gdańsk',
    date: new Date(),
    time: new Date().getHours(),
    price: 100,
    attendance: { man: 0, woman: 0, tbd: Players.length }
  },
  {
    title: 'Jabłka',
    place: 'Gdańsk',
    date: new Date(),
    time: new Date().getHours(),
    price: 100,
    attendance: { man: 0, woman: 0, tbd: Players.length }
  },
  {
    title: 'Gruszki',
    place: 'Gdynia',
    date: new Date('05/03/2017'),
    time: new Date().getHours(),
    price: 0,
    attendance: { man: 0, woman: 0, tbd: Players.length }
  }
];

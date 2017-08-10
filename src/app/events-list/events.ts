export interface Event {
  title: string;
  place: string;
  date: Date;
  time?: number;
  price?: number;
  attendance: Attendance;
  facebook?: string;
}

interface Attendance {
  man: number;
  woman: number;
  tbd: number;
}

export const Events = [
  {
    title: 'Jabłka',
    place: 'Gdańsk',
    date: new Date(),
    time: new Date().getHours(),
    price: 100,
    attendance: {man: 0, woman: 0, tbd: 0}
  },
  {
    title: 'Gruszki',
    place: 'Gdynia',
    date: new Date('05/03/2017'),
    time: new Date().getHours(),
    attendance: {man: 0, woman: 0, tbd: 0}
  },
  {
    title: 'Owocki',
    place: 'Wejherowo',
    date: new Date('06/03/2017'),
    time: new Date().getHours(),
    attendance: {man: 0, woman: 0, tbd: 0}
  },
  {
    title: 'Pomarańcze',
    place: 'Sopot',
    date: new Date('01/13/2017'),
    attendance: {man: 0, woman: 0, tbd: 0},
    facebook: 'http://www.facebook.com'
  }];

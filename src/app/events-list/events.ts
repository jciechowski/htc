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

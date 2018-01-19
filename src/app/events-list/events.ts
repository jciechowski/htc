import { Player } from '../players-list/players';

export interface TeamEvent {
  id?: string;
  title: string;
  place: string;
  date: Date;
  price?: number;
  attendance: Attendance;
  facebook?: string;
  attendingPlayers: Array<string>;
}

interface Attendance {
  man: number;
  woman: number;
}

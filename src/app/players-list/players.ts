export interface Player {
  id?: string;
  name: string;
  lastname: string;
  jerseyNumber: number;
  gender: Gender;
}

export enum Gender {
  woman,
  man
}

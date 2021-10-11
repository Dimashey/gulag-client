export enum TournamentStatus {
  CREATED = 'CREATED',
  STARTED = 'STARTED',
  ENDED = 'ENDED',
  CANCELED = 'CANCELED',
}

export interface TournamentDto {
  id: number;
  status: keyof typeof TournamentStatus;
  title: string;
  tournamentDate: Date;
}

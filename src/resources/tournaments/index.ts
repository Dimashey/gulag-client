import { request } from 'request/index';
import { TournamentDto } from 'models/tournaments';

export const getTournaments = (): Promise<TournamentDto[]> => {
  return request.get('tournaments');
};

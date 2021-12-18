import { request } from 'request/index';
import { TournamentDto } from 'models/tournaments';

export const getTournaments = () => {
  return request.get<TournamentDto[]>('tournaments');
};

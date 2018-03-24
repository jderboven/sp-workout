import { Performance } from './performance';
import { Dangerosite } from '../enum/dangerosite';
import { Cycle } from './cycle';

export interface Exercice {
  performances: Array<Performance>;
  description: string;
  commentaire: string;
  dangerosite: Dangerosite;
  cycle: Array<Cycle>;
  noteDifficulte: number;

}

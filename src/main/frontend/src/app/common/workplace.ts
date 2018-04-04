import {Position} from './position';

export class Workplace {

  constructor(public employerName: string, public city: string, public state: string, public positions: Position[],
              public description: string, public responsibilities: string[]) {
  }
}

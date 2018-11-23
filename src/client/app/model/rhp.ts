import { Building } from './building';
import { PropertyData } from './property-data';

export class Rhp {
  id: string;
  name: string;
  buildings: Building[];
  singleProperties: PropertyData[];
}

import { IService } from './IService';

export interface INode extends IService {
  id: string;
  position: {
    x: number;
    y: number;
  };
}

import { INodeDefinition } from './INodeDefinition';
import { INode } from './INode';
import { IService } from './IService';
import { IConnection } from './IConnection';

export interface IFlow {
  Palette: INodeDefinition[];
  Services: IService[];
  Nodes: INode[];
  Connections: IConnection[];
}

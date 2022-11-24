export interface INodeDefinition {
  id: string;
  type: 'Service' | 'Instance';
  name: string;
  category: string;
  backend: string;
  frontend: string;
  template: string;
}

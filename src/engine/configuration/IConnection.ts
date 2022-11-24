export interface IConnection {
  from: {
    node: string;
    output: string;
  };
  to: {
    node: string;
    input: string;
  };
}

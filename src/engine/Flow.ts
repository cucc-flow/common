import { Palette } from './Palette';
import { Channel } from './Channel';
import { Node } from './runtime/Node';
import { IConnection, INode, IService } from './configuration';
import { Connection } from './runtime/Connection';
import { Input } from './environment';
import { Service } from './runtime/Service';

export class Flow {
	private Channel: Channel;
	public Palette: Palette;

	Nodes: Node[] = [];
	Services: Service[] = [];
	Edges: Connection[] = [];

	constructor() {
		this.Channel = new Channel();
		this.Palette = new Palette();
	}

	AddNode(node: INode) {
		const definition = this.Palette.Find(node.definitionId);
		this.Nodes.push(new Node(this.Channel, definition, node));
	}

	AddService(service: IService) {
		const definition = this.Palette.Find(service.definitionId);
		this.Services.push(new Service(this.Channel, definition, service));
	}

	AddEdge(edge: IConnection) {
		const e = new Connection(this.Channel, edge);
		e.on('send', (msg) => {
			const node = this.Nodes.find((node: Node) => node.Node.id === msg.to.node);
			if (!node) return;

			if (
				node.Instance[msg.to.input] &&
        node.Instance[msg.to.input] instanceof Input
			) {
				node.Instance[msg.to.input].Update(msg.msg);
			}
		});
		this.Edges.push(e);
	}

	Start() {
		this.Nodes.forEach((node: any) => node.Init());
	}

	Stop() {}
}

import { INode } from '../configuration';
import { Channel } from '../Channel';
import { Definition } from './Definition';
import { Output } from '../environment';

export class Node {
	private Channel: Channel;
	private Definition: Definition;
	public Node: INode;

	Instance: any;

	constructor(channel: Channel, definition: Definition, node: INode) {
		this.Channel = channel;
		this.Definition = definition;
		this.Node = node;
	}

	Init() {
		this.Instance = new this.Definition.Type(this.Node.id, this.Channel);

		Object.getOwnPropertyNames(this.Instance).forEach((property) => {
			if (
				this.Instance[property] &&
        this.Instance[property] instanceof Output
			) {
				this.Instance[property].on('send', (msg: any) => {
					this.Channel.emit(`${this.Node.id}:${property}`, msg);
				});
			}
		});

		this.Instance.configure({});
	}
}

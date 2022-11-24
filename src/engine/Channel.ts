import { EventEmitter } from 'events';

class Message {
	source: any = { node: null, event: null };
	target: any = { node: null, command: null };
	value: any = null;

	constructor(from: any, to: any, value: any) {}
}

export class Channel extends EventEmitter {
	Queue: any = [];

	constructor() {

		super();
	}

	Broadcast(node: any, event: any, data: any) {
		const message = new Message({ node, event }, null, data);
	}
}

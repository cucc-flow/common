import { Channel } from '../Channel';
import { EventEmitter } from 'events';
import { IConnection } from '../configuration';

export class Connection extends EventEmitter {
	private Channel: Channel;
	private Definition: IConnection;

	constructor(channel: Channel, definition: IConnection) {
		super();
		this.Channel = channel;
		this.Definition = definition;

		this.Channel.on(
			`${definition.from.node}:${definition.from.output}`,
			(msg: any) => {
				this.emit('send', { to: definition.to, msg });
			}
		);
	}
}

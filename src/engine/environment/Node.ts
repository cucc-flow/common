import { EventEmitter } from 'events';
import { Service } from './Service';

export class Node extends EventEmitter {
	private Services;
	private id: string;
	private channel: any;

	constructor(id: any, channel: any, services: Service[]) {
		super();
		this.id = id;
		this.channel = channel;
		this.Services = services;
	}

	send(output: any, msg: any) {
		if (!(this as any).outputs.some((o: any) => o.id === output)) {
			this.warning(
				'Can not send message on a not existing output',
				output,
				'Available outputs:',
				(this as any).outputs
			);
		}

		this.channel.emit(`${this.id}:${output}`, msg);
	}

	error(...msg: any) {
		//LoggingService.Instance.log('[ERROR] ', ...msg);
	}

	warning(...msg: any) {
		console.log('[WARNING] ', ...msg);
	}
}

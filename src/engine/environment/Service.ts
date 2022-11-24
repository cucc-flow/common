import { EventEmitter } from 'events';

export class Service extends EventEmitter {
	private channel: any;

	constructor(channel: any) {
		super();
		this.channel = channel;
	}

	error(...msg: any) {
		console.log('[ERROR] ', ...msg);
	}

	warning(...msg: any) {
		console.log('[WARNING] ', ...msg);
	}
}

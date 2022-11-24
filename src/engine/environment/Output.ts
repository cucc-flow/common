import { EventEmitter } from 'events';

export class Output extends EventEmitter {
	Name: string;
	Value: any;

	constructor(name: string) {
		super();
		this.Name = name;
	}

	Send(value: any) {
		this.emit('send', value);
	}
}

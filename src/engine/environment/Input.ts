import { EventEmitter } from 'events';

export class Input extends EventEmitter {
	Name: string;
	Value: any;

	constructor(name: string) {
		super();
		this.Name = name;
	}

	Update(value: any) {
		this.emit('updating', value);
		this.emit('updated', value);
		this.emit('changed', value);
	}
}

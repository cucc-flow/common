import { IService } from '../configuration';
import { Channel } from '../Channel';
import { Definition } from './Definition';

export class Service {
	private Channel: Channel;
	private Definition: Definition;
	public Service: IService;

	Instance: any;

	constructor(channel: Channel, definition: Definition, service: IService) {
		this.Channel = channel;
		this.Definition = definition;
		this.Service = service;
	}

	Init() {
		this.Instance = new this.Definition.Type(this.Channel);
	}
}

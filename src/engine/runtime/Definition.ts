import { INode, INodeDefinition } from '../configuration';
import * as $ from '../environment';

const _ = $;

export class Definition {
	private Definition: INodeDefinition;
	public Type: any;

	constructor(definition: INodeDefinition) {
		this.Definition = definition;
		this.Type = eval(`(${definition.backend})`);
	}
}

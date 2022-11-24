import { EventEmitter } from 'events';
import { Definition } from './runtime/Definition';

export class Palette {
	private Definitions: { [key: string]: Definition } = {};

	SetNodeDefinition(definition: any) {
		if (this.Definitions.hasOwnProperty(definition.id)) {
		} else {
			this.Definitions[definition.id] = new Definition(definition);
		}
	}

	Find(id: any) {
		return this.Definitions[id];
	}
}

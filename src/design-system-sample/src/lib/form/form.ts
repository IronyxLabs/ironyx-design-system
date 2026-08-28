import type { Field } from './field.svelte';

export class Form {
	fields: Record<string, Field<any>>;

	constructor(data: Record<string, Field<any>>) {
		this.fields = data;
	}

	public isValid(): boolean {
		return Object.values(this.fields).every((f) => f.validationState.isValid);
	}
}

<script lang="ts">
	import type { Snippet } from "svelte";
import { IxSelect, IxField, type OptionModel, Field, type IValidator } from "../index.ts";

	let { validator, icon, options, disabled }: 
	  { validator: IValidator<string>, icon?: string, options: OptionModel[], disabled: boolean } = $props()

	const field = new Field<string>({validators: [ validator! ]});
</script>

<IxField label="Name" field={field} disabled={disabled}>
    <IxSelect icon={icon} options={options}></IxSelect>    
</IxField>
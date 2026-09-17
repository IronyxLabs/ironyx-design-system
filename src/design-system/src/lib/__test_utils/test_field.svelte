<script lang="ts">
	import { IxField, IxInput, type IValidator } from "../index.ts";
	import { Field } from "../forms/field/field.svelte.ts";

	let { validator } : { validator: IValidator<string> } = $props();

	const field = new Field<string>({ validators: [validator] });
</script>

<IxField field={field} label="Name">
    <IxInput></IxInput>
    {#if field.valid}
    <span>Valid</span>
    {/if}

    {#if field.invalid}
    <span>Invalid</span>
    {/if}
</IxField>
<script lang="ts">
	import { IxSelect, IxField, type OptionModel, Field, type IValidator } from '../lib/index.ts';

	let {
		validator,
		icon,
		options,
		disabled
	}: { validator: IValidator<string>; icon?: string; options: OptionModel[]; disabled: boolean } =
		$props();

	const field = new Field<string>({ validators: [validator!] });
</script>

<IxField label="Name" {field} {disabled}>
	<IxSelect {icon} {options}></IxSelect>
</IxField>

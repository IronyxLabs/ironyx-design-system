<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { OptionModel } from './option_model.ts';
	import { FIELD_CONTEXT } from '../../forms/constants.ts';
	import { FieldContext } from '../../forms/field_context/field_context.ts';
	import IxSkeleton from '$lib/loading/skeleton/ix-skeleton.svelte';

	let {
		icon = '',
		options = [],
		optionTemplate = defaultOptionTemplate,
		loadingKey = ''
	}: {
		icon?: string;
		options: OptionModel[];
		optionTemplate?: Snippet<[OptionModel]>;
		loadingKey?: string;
	} = $props();

	const contextFn = getContext<() => FieldContext<number>>(FIELD_CONTEXT);
	const context = contextFn();
</script>

{#snippet defaultOptionTemplate(option: OptionModel)}
	<option value={option.id} disabled={option.disabled}>{option.label}</option>
{/snippet}

<div class="container">
	<IxSkeleton key={loadingKey}>
		<div class="component__container select body__medium" invalid={contextFn().field.invalid}>
			{#if icon !== ''}
				<i class={icon}></i>
			{/if}
			<select bind:value={context.field.value} disabled={contextFn().disabled}>
				{#each options as option (option)}
					{@render optionTemplate(option)}
				{/each}
			</select>
		</div>
	</IxSkeleton>
</div>

<style lang="scss">
	div {
		&.container {
			height: 40px;
		}
	}
</style>

<script lang="ts">
	import { FieldContext } from '../../forms/field_context/field_context.ts';
	import { FIELD_CONTEXT } from '../../forms/constants.ts';
	import { getContext } from 'svelte';
	import IxSkeleton from '$lib/loading/skeleton/ix-skeleton.svelte';

	let {
		placeholder = '',
		icon = '',
		loadingKey = ''
	}: {
		placeholder?: string;
		icon?: string;
		loadingKey?: string;
	} = $props();

	const contextFn = getContext<() => FieldContext<string>>(FIELD_CONTEXT);
	const context = contextFn();
</script>

<div class="container">
	<IxSkeleton key={loadingKey}>
		<div
			class="component__container input__container input body__medium"
			disabled={contextFn().disabled}
			invalid={contextFn().field.invalid}
		>
			{#if icon !== ''}
				<i class={icon}></i>
			{/if}
			<input
				class="input__input"
				{placeholder}
				disabled={contextFn().disabled}
				bind:value={context.field.value}
			/>
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

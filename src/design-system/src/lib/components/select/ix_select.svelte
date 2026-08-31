<script lang="ts" >
	import { getContext, type Snippet } from 'svelte';
	import type { OptionModel } from './option_model.ts';
	import { FIELD_CONTEXT } from '../../forms/constants.ts';
	import { FieldContext } from '../../forms/field_context/field_context.ts';
  
    let { icon = '', options = [], optionTemplate = defaultOptionTemplate }: 
      { icon?: string, options: OptionModel[], optionTemplate?: Snippet<[OptionModel]> } = $props();

    const contextFn = getContext<() => FieldContext<number>>(FIELD_CONTEXT);
    const context = contextFn();
</script>

{#snippet defaultOptionTemplate(option: OptionModel)}
	<option value={option.id} disabled={option.disabled}>{option.label}</option>
{/snippet}


<div class="component__container select body__medium">        
    {#if icon !== ''}
        <i class="{icon}"></i>
    {/if}
    <select bind:value={context.field.value} oninput={() => contextFn().field.validate()} 
        disabled={contextFn().disabled} aria-invalid={contextFn().field.invalid}>
        {#each options as option (option)}
            {@render optionTemplate(option)}
        {/each}
    </select>    
</div>
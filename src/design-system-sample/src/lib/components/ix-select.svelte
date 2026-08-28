<script lang="ts">
	import type { Field } from '$lib/form/field.svelte';
	import type { OptionModel } from '$lib/models/option-model';
	import type { Snippet } from 'svelte';

    let { icon = '', field = $bindable<Field<any>>(), options = [], optionTemplate = defaultOptionTemplate }: 
      { icon?: string, field: Field<any>, options: OptionModel[], optionTemplate?: Snippet<[OptionModel]> } = $props();

    function validate() {
      field.validators.forEach(validator => {
         field.validationState = validator.validate(field.value);
      })
    }
</script>

{#snippet defaultOptionTemplate(option: OptionModel)}
	<option value={option.id} disabled={option.disabled}>{option.label}</option>
{/snippet}


<div class="component__container select body__medium">        
    {#if icon !== ''}
        <i class="{icon}"></i>
    {/if}
    <select bind:value={field.value} oninput={validate}>
        {#each options as option (option)}
            {@render optionTemplate(option)}
        {/each}
    </select>    
</div>
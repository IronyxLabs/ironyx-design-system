<script lang="ts">
	import type { OptionModel } from '$lib/models/option-model';
	import type { Snippet } from 'svelte';

    let { icon = '', options = [], optionTemplate = defaultOptionTemplate }: { icon: string, options: OptionModel[], optionTemplate: Snippet<[OptionModel]> } = $props();
</script>

{#snippet defaultOptionTemplate(option: OptionModel)}
	<option value={option.id} disabled={option.disabled}>{option.label}</option>
{/snippet}


<div class="component__container select body__medium">        
    {#if icon !== ''}
        <i class="{icon}"></i>
    {/if}
    <select>
        {#each options as option (option)}
            {@render optionTemplate(option)}
        {/each}
    </select>    
</div>
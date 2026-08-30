<script lang="ts">
	import type { Field } from "@ironyx/design-system";

    let { placeholder = '' ,icon ='', field: field = $bindable<Field<string>>(), disabled = false }: {
      placeholder?: string, icon?: string, field: Field<string>, disabled?: boolean
    } = $props();
</script>

<div class="component__container input__container input body__medium" invalid={!field.validationState.isValid} disabled={disabled}>
    {#if icon !== ''}
        <i class="{icon}"></i>
    {/if}
    <input class="input__input" placeholder="{placeholder}" disabled={disabled} 
            bind:value={field.value} aria-invalid={!field.validationState.isValid} oninput="{() => field.validate()}"/> 
</div>
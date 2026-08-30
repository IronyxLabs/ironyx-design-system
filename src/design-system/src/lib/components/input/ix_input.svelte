<script lang="ts">
	import { FieldContext } from "../../forms/field_context/field_context.ts";
	import { FIELD_CONTEXT } from "../../forms/constants.ts";
	import { getContext } from "svelte";

    let { placeholder = '' ,icon ='' }: {
      placeholder?: string, icon?: string
    } = $props();

    const context = getContext<FieldContext<string>>(FIELD_CONTEXT);
</script>

<div class="component__container input__container input body__medium" disabled={context.disabled}>
    {#if icon !== ''}
        <i class="{icon}"></i>
    {/if}
    <input class="input__input" placeholder="{placeholder}" disabled={context.disabled} aria-invalid="{!context.field.validationState.isValid}"
            bind:value={context.field.value} oninput={() => context.field.validate()}/> 
</div>
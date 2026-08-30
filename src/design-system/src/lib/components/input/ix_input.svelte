<script lang="ts">
	import { FieldContext } from "../../forms/field_context/field_context.ts";
	import { FIELD_CONTEXT } from "../../forms/constants.ts";
	import { getContext } from "svelte";

    let { placeholder = '' ,icon ='' }: {
      placeholder?: string, icon?: string
    } = $props();

    const contextFn = getContext<() => FieldContext<string>>(FIELD_CONTEXT);
    const context = contextFn();
</script>

<div class="component__container input__container input body__medium" disabled={contextFn().disabled}>
    {#if icon !== ''}
        <i class="{icon}"></i>
    {/if}
    <input class="input__input" placeholder="{placeholder}" disabled={contextFn().disabled} aria-invalid="{!contextFn().field.validationState.isValid}"
            bind:value={context.field.value} oninput={() => context.field.validate()}/> 
</div>
<script lang="ts" generics="T">
	import { FIELD_CONTEXT } from "../../forms/constants.ts";
	import type { Field } from "../../forms/field/field.svelte.ts";
	import { FieldContext } from "../../forms/field_context/field_context.ts";
	import { setContext, type Snippet } from "svelte";

    let { label, field = $bindable<Field<T>>(), children, required = false, hint = undefined, disabled = false }:
      { label: string, field?: Field<T>, children: Snippet, required?: boolean, hint?: string, disabled?: boolean } = $props();
    
    setContext(FIELD_CONTEXT, () => new FieldContext(field, disabled));
</script>

<div class="field">
    <span data-testid='label' class="label__small" 
        class:label--required={required} class:label--disabled={disabled}>{label}</span>
    {@render children()}
    {#if field.isValid}
    <span class="caption" class:caption--disabled={disabled}>{hint}</span>
    {:else}
    <span class="caption text__error">{field.validationState.error}</span>
    {/if}
</div>
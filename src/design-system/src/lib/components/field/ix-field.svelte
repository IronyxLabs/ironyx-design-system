<script lang="ts" generics="T">
	import { FIELD_CONTEXT } from "../../forms/constants.ts";
	import type { Field } from "../../forms/field/field.svelte.ts";
	import { FieldContext } from "../../forms/field_context/field_context.ts";
	import { setContext, type Snippet } from "svelte";

    let { label, field, children }: { label: string, field: Field<T>, children: Snippet } = $props();
    
    setContext(FIELD_CONTEXT, () => new FieldContext(field.value));
</script>

<div>
    <span>{label}</span>
    {@render children()}
</div>
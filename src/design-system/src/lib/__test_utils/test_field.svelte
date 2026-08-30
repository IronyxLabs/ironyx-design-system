<script lang="ts">
	import { FIELD_CONTEXT } from "$lib/forms/constants.ts";
	import { FieldContext } from "$lib/forms/form_context/field_context.ts";
	import { getContext } from "svelte";

    const context = getContext<FieldContext<string>>(FIELD_CONTEXT);
</script>

<span data-testid="value">{context.value}</span>
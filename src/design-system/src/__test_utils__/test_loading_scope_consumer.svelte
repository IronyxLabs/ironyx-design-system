<script lang="ts">
	import { LOADING_KEY_CONTEXT } from '$lib/loading/constants.ts';
	import { getContext } from 'svelte';

	const key = getContext<string>(LOADING_KEY_CONTEXT);
</script>

<div data-testid="divLoadingKey">{key}</div>

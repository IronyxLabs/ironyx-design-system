<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { LOADING_KEY_CONTEXT } from '../constants.ts';

	let { key = '', children }: { key?: string; children: Snippet<[]> } = $props();

	setContext<string>(LOADING_KEY_CONTEXT, key);
</script>

{@render children()}

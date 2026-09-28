<script lang="ts">
	import { loaderStore } from '$lib/services/loader.store.js';
	import type { Snippet } from 'svelte';

	let { key = '', children = undefined }: { key: string; children?: Snippet<[]> } = $props();

	const loader = loaderStore.provide(key);
</script>

{#if loader.isActive}
	<div class="skeleton"></div>
{:else}
	{#if children}
		{@render children()}
	{/if}
{/if}

<style lang="scss">
	.skeleton {
		width: 100%;
		height: 100%;
		border-radius: var(--border__radius--md);
		background: linear-gradient(
			120deg,
			var(--color__neutral--400) 45%,
			var(--color__neutral--300) 50%,
			var(--color__neutral--400) 55%
		);
		background-size: 200% 100%;
		animation: skeleton-shimmer 2s linear infinite;
	}

	@keyframes skeleton-shimmer {
		from {
			background-position: 200% 0;
		}

		to {
			background-position: -200% 0;
		}
	}
</style>

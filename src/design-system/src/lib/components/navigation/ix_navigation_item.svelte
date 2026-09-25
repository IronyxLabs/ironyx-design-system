<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let { label, icon, path }: { label: string; icon: string; path: string } = $props();

	function isActive(): boolean {
		console.log(page.url.pathname);
		return page.url.pathname === path;
	}
</script>

<div class="navigation_item" onclick={() => goto(path)} active={isActive()}>
	<i class={icon}></i>
	<span class="navigation_item__label">{label}</span>
</div>

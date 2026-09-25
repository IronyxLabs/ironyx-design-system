<script lang="ts">
	import { page } from '$app/state';

	let { label, icon, path }: { label: string; icon: string; path: string } = $props();

	function isActive(): boolean {
		return page.url.pathname === path;
	}
</script>

<a class="navigation_item" href={path} active={isActive()}>
	<i class={icon}></i>
	<span class="navigation_item__label">{label}</span>
</a>

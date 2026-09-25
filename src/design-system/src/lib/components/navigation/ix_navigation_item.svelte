<script lang="ts">
    let { label, icon }: { label: string, icon: string } = $props();
</script>

<div class="navigation_item">
    <i class="{icon}"></i>
    <span class="navigation_item__label">{label}</span>
</div>
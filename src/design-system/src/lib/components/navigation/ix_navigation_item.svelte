<script lang="ts">
    let { label, icon, path }: { label: string, icon: string, path: string } = $props();
</script>

<div class="navigation_item">
    <span class="navigation_item__label">{label}</span>
    <i class="navigation_item__icon {icon}"></i>    
</div>
<script lang="ts">
    let { label, icon= '', variant = 'neutral' } = $props();
</script>

<div class="component__container badge__container badge badge--{variant}">
    <i class="badge__icon {icon}"></i>
    <span>{label}</span>
</div>
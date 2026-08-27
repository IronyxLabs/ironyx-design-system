<script lang="ts">
    let { children, variant, icon = '' } = $props();
</script>

<button class="button button--{variant}">
    <div class="button__content">
        {#if icon !== ''}
            <i class="button__icon {icon}"></i>
        {/if}
        {@render children()}
    </div>
</button>
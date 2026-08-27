<script lang="ts">
    let { children, variant, icon = '', disabled = false } = $props();
</script>

<button class="button button--{variant}" disabled={disabled}>
    <div class="component__container button__container">
        {#if icon !== ''}
            <i class="{icon}"></i>
        {/if}
        {@render children()}
    </div>
</button>
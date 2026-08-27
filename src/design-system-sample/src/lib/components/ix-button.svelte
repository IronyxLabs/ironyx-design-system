<script lang="ts">
    let { children, variant, icon = '', disabled = false } = $props();
</script>

<button class="button button--{variant}" disabled={disabled}>
    <div class="button__content">
        {#if icon !== ''}
            <i class="button__icon button__icon--{variant} {icon}"></i>
        {/if}
        {@render children()}
    </div>
</button>
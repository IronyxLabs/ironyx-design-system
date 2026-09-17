<script lang="ts">
	import type { Snippet } from "svelte";
	import type { ButtonVariant } from "./button_variants.ts";

    let { children, variant, icon = '', disabled = false, onclick } : 
     { children: Snippet, variant: ButtonVariant, icon?: string, disabled?: boolean,
       onclick?: (event: Event) => void
     } = $props();
</script>

<button class="button button--{variant}" disabled={disabled} onclick={onclick}>
    <div class="component__container button__container">
        {#if icon !== ''}
            <i class="{icon}"></i>
        {/if}
        {@render children()}
    </div>
</button>
<script lang="ts">
    let { placeholder = '' ,icon ='', disabled = false } = $props();

    let invalid = false;
</script>

<div class="component__container input__container input body__medium" invalid={invalid} disabled={disabled}>
    {#if icon !== ''}
        <i class="{icon}"></i>
    {/if}
    <input class="input__input" placeholder="{placeholder}" disabled={disabled} oninvalid={() => invalid = true}/> 
</div>
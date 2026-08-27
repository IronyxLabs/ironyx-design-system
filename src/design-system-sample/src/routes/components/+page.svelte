<script>
	import IxButton from "$lib/components/ix-button.svelte";

</script>
<svelte:head>
    <link rel="stylesheet" href="styles.scss"/>
</svelte:head>

<style lang="scss">
    div.container {
        display: grid;
        grid-row: auto auto;
    }
    
    div.colors {
        display: grid;
        grid-auto-flow: column;
        gap: .4rem;

        justify-items: center;
        
        width: fit-content;
        height: 100%;
    }

    div.font {
        display: grid;
        grid-auto-flow: row;
        gap: .8rem;
    }

    div.stack {
        display: grid;
        grid-template-rows: auto;
        gap: .8rem;

        width: 200px;

        padding: .4rem;

        justify-items: center;
    }

    span.caption {
        font-size: 1.2rem;
        font-weight: bold;
    }

    div.bar {
        display: grid;
        grid-auto-flow: row;
        gap: 4px;
        
        width: 100%;
        height: fit-content;
    }

    div.color {
        height: 25px;

        text-align: center;
        align-content: center;
    }

    div.font-size {
        display: grid;
        grid-auto-flow: row;
    }

    span.color {
        font-weight: bold;
    }

    div.status {
        border-width: 1px;
        border-style: solid;
    }
</style>

<div class="container">
    <div class="colors">
        <div class="stack">
            <span class="caption">Button</span>
    
            <div class="bar">
                <IxButton variant="primary" icon="ri-save-2-fill">Primary</IxButton>
                <IxButton variant="primary" icon="ri-save-2-fill" disabled={true}>Primary</IxButton>
                <IxButton variant="secondary" icon="ri-file-close-line">Secondary</IxButton>
                <IxButton variant="secondary" icon="ri-file-close-line" disabled={true}>Secondary</IxButton>
                <IxButton variant="destructive" icon="ri-delete-bin-line">Destructive</IxButton>
                <IxButton variant="destructive" icon="ri-delete-bin-line" disabled={true}>Destructive</IxButton>
            </div>
        </div>  
    </div>
</div>
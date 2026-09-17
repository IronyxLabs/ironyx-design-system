<script lang="ts">
	import { IxButton, IxInput, IxSelect, OptionModel, IxBadge, IxCard, ButtonVariant, BadgeVariant } from '@ironyx/design-system';

	const cities: OptionModel[] = [
	        { id: 1, label: "Rome" }, 
			{ id: 2, label: "New York", disabled: true }, 
			{ id: 3, label: "Budapest" },
			{ id: 4, label: "London"},
			{ id: 5, label: "Paris"}
	]
	
</script>
<svelte:head>
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
                <IxButton variant={ButtonVariant.Primary} icon="ri-save-2-fill">Primary</IxButton>
                <IxButton variant={ButtonVariant.Primary} icon="ri-save-2-fill" disabled={true}>Primary</IxButton>
                <IxButton variant={ButtonVariant.Secondary} icon="ri-file-close-line">Secondary</IxButton>
                <IxButton variant={ButtonVariant.Secondary} icon="ri-file-close-line" disabled={true}>Secondary</IxButton>
                <IxButton variant={ButtonVariant.Destructive} icon="ri-delete-bin-line">Destructive</IxButton>
                <IxButton variant={ButtonVariant.Destructive} icon="ri-delete-bin-line" disabled={true}>Destructive</IxButton>
            </div>
        </div>  
        
        <div class="stack">
            <span class="caption">Input</span>
    
            <div class="bar">
                <IxInput icon="ri-user-line" placeholder="Write Something"></IxInput>
                <IxInput icon="ri-user-line" placeholder="Disabled"></IxInput>
            </div>
        </div>   
        
        <div class="stack">
            <span class="caption">Badge</span>
    
            <div class="bar" style="width: fit-content;">
                <IxBadge icon="ri-battery-low-line" label="10%" variant={BadgeVariant.Neutral}></IxBadge>
                <IxBadge icon="ri-battery-low-line" label="10%" variant={BadgeVariant.Primary}></IxBadge>
                <IxBadge icon="ri-battery-low-line" label="10%" variant={BadgeVariant.Accent}></IxBadge>
                <IxBadge icon="ri-battery-low-line" label="10%" variant={BadgeVariant.Success}></IxBadge>
                <IxBadge icon="ri-battery-low-line" label="10%" variant={BadgeVariant.Warning}></IxBadge>
                <IxBadge icon="ri-battery-low-line" label="10%" variant={BadgeVariant.Error}></IxBadge>
                <IxBadge icon="ri-battery-low-line" label="10%" variant={BadgeVariant.Info}></IxBadge>
            </div>
        </div>   
        
        <div class="stack">
            <span class="caption">Select</span>
    
            <div class="bar">
                <IxSelect icon="ri-building-line" options={cities}></IxSelect>
            </div>
        </div>   
        
        <div class="stack">
            <span class="caption">Card</span>
    
            <div style="width: 300px">
                <IxCard>
                    <div style="display: grid; grid-template-rows: auto auto 1fr; gap: 8px; width: 100%; height: 100%;">
                        <IxInput icon="ri-user-line" placeholder="Name"></IxInput>
                        <IxSelect icon="ri-building-line" options={cities}></IxSelect>                        
                    </div>
                </IxCard>
            </div>
        </div>  
    </div>
</div>
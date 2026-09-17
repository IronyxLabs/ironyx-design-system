<svelte:head>
    <link rel="stylesheet" href="semantics\colors.scss"/>
    <link rel="stylesheet" href="semantics\typography.scss"/>
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
            <span class="caption">Action - Primary</span>
    
            <div class="bar">
                <div class="color" style="background-color: var(--action__primary);">
                    <span class="color" style="color: var(--action__primary--foreground)">Default</span>
                </div>
                
                <div class="color" style="background-color: var(--action__primary--hover);">
                    <span class="color" style="color: var(--action__primary--foreground)">Hover</span>
                </div>
                
                <div class="color" style="background-color: var(--action__primary--active);">
                    <span class="color" style="color: var(--action__primary--foreground)">Active</span>
                </div>
                
                <div class="color" style="background-color: var(--action__primary--disabled);">
                    <span class="color" style="color: var(--action__primary--foreground)">Disabled</span>
                </div>
            </div>
        </div>  
        
        <div class="stack">
            <span class="caption">Action - Secondary</span>
    
            <div class="bar">
                <div class="color" style="background-color: var(--action__secondary);">
                    <span class="color" style="color: var(--action__secondary--foreground)">Default</span>
                </div>
                
                <div class="color" style="background-color: var(--action__secondary--hover);">
                    <span class="color" style="color: var(--action__secondary--foreground)">Hover</span>
                </div>
                
                <div class="color" style="background-color: var(--action__secondary--active);">
                    <span class="color" style="color: var(--action__secondary--foreground)">Active</span>
                </div>
                
                <div class="color" style="background-color: var(--action__secondary--disabled);">
                    <span class="color" style="color: var(--action__secondary--foreground)">Disabled</span>
                </div>
            </div>
        </div>  
        
        <div class="stack">
            <span class="caption">Action - Accent</span>
    
            <div class="bar">
                <div class="color" style="background-color: var(--action__accent);">
                    <span class="color" style="color: var(--action__accent--foreground)">Default</span>
                </div>
                
                <div class="color" style="background-color: var(--action__accent--hover);">
                    <span class="color" style="color: var(--action__accent--foreground)">Hover</span>
                </div>
                
                <div class="color" style="background-color: var(--action__accent--active);">
                    <span class="color" style="color: var(--action__accent--foreground)">Active</span>
                </div>
                
                <div class="color" style="background-color: var(--action__accent--disabled);">
                    <span class="color" style="color: var(--action__accent--foreground)">Disabled</span>
                </div>
            </div>
        </div>   
        
        <div class="stack">
            <span class="caption">Background</span>
    
            <div class="bar">
                <div class="color" style="background-color: var(--background);">
                    <span class="color" style="color: var(--foreground)">Default</span>
                </div>
                <div class="color" style="background-color: var(--background--disabled);">
                    <span class="color" style="color: var(--foreground)">Disabled</span>
                </div>
                
                <div class="color" style="background-color: var(--background--inverse);">
                    <span class="color" style="color: var(--foreground--inverse)">Inverse</span>
                </div>
                
                <div class="color" style="background-color: var(--background--muted);">
                    <span class="color" style="color: var(--foreground)">Muted</span>
                </div>
                
                <div class="color" style="background-color: var(--background--subtle);">
                    <span class="color" style="color: var(--foreground)">Subtle</span>
                </div>
            </div>
        </div>    
        
        <div class="stack">
            <span class="caption">Surface</span>
    
            <div class="bar">
                <div class="color" style="background-color: var(--background__surface);">
                    <span class="color" style="color: var(--foreground)">Default</span>
                </div>
                <div class="color" style="background-color: var(--background__surface--hover);">
                    <span class="color" style="color: var(--foreground)">Hover</span>
                </div>
                
                <div class="color" style="background-color: var(--background__surface--active);">
                    <span class="color" style="color: var(--foreground)">Active</span>
                </div>
            </div>
        </div>      
        
        <div class="stack">
            <span class="caption">Border</span>
    
            <div class="bar">
                <div class="color" style="background-color: var(--border);">
                    <span class="color" style="color: var(--foreground)">Default</span>
                </div>
                
                <div class="color" style="background-color: var(--border--hover);">
                    <span class="color" style="color: var(--foreground--inverse)">Hover</span>
                </div>
                
                <div class="color" style="background-color: var(--border--focus);">
                    <span class="color" style="color: var(--foreground--inverse)">Focus</span>
                </div>
                
                <div class="color" style="background-color: var(--border--strong);">
                    <span class="color" style="color: var(--foreground)">Strong</span>
                </div>
                
                <div class="color" style="background-color: var(--border--subtle);">
                    <span class="color" style="color: var(--foreground)">Subtle</span>
                </div>
                
                <div class="color" style="background-color: var(--border--disable);">
                    <span class="color" style="color: var(--foreground)">Disable</span>
                </div>
            </div>
        </div>      
        
        <div class="stack">
            <span class="caption">Focus</span>
    
            <div class="bar">
                <div class="color" style="background-color: var(--focus);">
                    <span class="color" style="color: var(--foreground--inverse)">Focus</span>
                </div>
                
                <div class="color" style="background-color: var(--focus--error);">
                    <span class="color" style="color: var(--foreground--inverse)">Error</span>
                </div>
            </div>
        </div>         
        
        <div class="stack">
            <span class="caption">Status</span>
    
            <div class="bar">
                <div class="color status" style="background-color: var(--status__background--success); border-color: var(--status__border--success);">
                    <span style="color: var(--status__icon--success)">‪‪❤︎‬</span>
                    <span class="color" style="color: var(--status__foreground--success)">Success</span>
                </div>
            </div>
            
            <div class="bar">
                <div class="color status" style="background-color: var(--status__background--warning); border-color: var(--status__border--warning);">
                    <span style="color: var(--status__icon--warning)">‪‪❤︎‬</span>
                    <span class="color" style="color: var(--status__foreground--warning)">Warning</span>
                </div>
            </div>
            
            <div class="bar">
                <div class="color status" style="background-color: var(--status__background--error); border-color: var(--status__border--error);">
                    <span style="color: var(--status__icon--error)">‪‪❤︎‬</span>
                    <span class="color" style="color: var(--status__foreground--error)">Error</span>
                </div>
            </div>
            
            <div class="bar">
                <div class="color status" style="background-color: var(--status__background--info); border-color: var(--status__border--info);">
                    <span style="color: var(--status__icon--info)">‪‪❤︎‬</span>
                    <span class="color" style="color: var(--status__foreground--info)">Info</span>
                </div>
            </div>
        </div>    
    </div>

    <div class="font-size">
        <span class="body__small">Small Body Text</span>
    </div>
    
    <div class="font-size">
        <span class="body__small--strong">Small Strong Body Text</span>
    </div>
    
    <div class="font-size">
        <span class="body__medium">Medium Body Text</span>
    </div>
    
    <div class="font-size">
        <span class="body__medium--strong">Medium Strong Body Text</span>
    </div>
    
    <div class="font-size">
        <span class="body__large">Large Body Text</span>
    </div>
    
    <div class="font-size">
        <span class="body__large--strong">Large Strong Body Text</span>
    </div>
    
    <div class="font-size">
        <span class="heading__h4">Heading H4</span>
    </div>
    
    <div class="font-size">
        <span class="heading__h3">Heading H3</span>
    </div>
    
    <div class="font-size">
        <span class="heading__h2">Heading H2</span>
    </div>
    
    <div class="font-size">
        <span class="heading__h1">Heading H1</span>
    </div>
    
    <div class="font-size">
        <span class="label__small">Label Small</span>
    </div>
    
    <div class="font-size">
        <span class="label__medium">Label Medium</span>
    </div>
    
    <div class="font-size">
        <span class="label__large">Label Large</span>
    </div>
    
    <div class="font-size">
        <span class="caption">Caption</span>
    </div>
    
    <div class="font-size">
        <span class="caption">Strong Caption</span>
    </div>
    
    <div class="font-size">
        <span class="display__medium">Medium Display</span>
    </div>
    
    <div class="font-size">
        <span class="display__large">Large Display</span>
    </div>
</div>
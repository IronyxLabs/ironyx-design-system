<svelte:head>
    <link rel="stylesheet" href="primitives\colors.scss"/>
    <link rel="stylesheet" href="primitives\typography.scss"/>
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
    }

    div.font-size {
        display: grid;
        grid-auto-flow: row;
    }
</style>

<div class="container">
    <div class="colors">
        <div class="stack">
            <span class="caption">Neutral</span>
    
            <div class="bar">
                <div class="color" style="background-color: var(--color__neutral--50);"></div>
                <div class="color" style="background-color: var(--color__neutral--100);"></div>
                <div class="color" style="background-color: var(--color__neutral--200);"></div>
                <div class="color" style="background-color: var(--color__neutral--300);"></div>
                <div class="color" style="background-color: var(--color__neutral--400);"></div>
                <div class="color" style="background-color: var(--color__neutral--500);"></div>
                <div class="color" style="background-color: var(--color__neutral--600);"></div>
                <div class="color" style="background-color: var(--color__neutral--700);"></div>
                <div class="color" style="background-color: var(--color__neutral--800);"></div>
                <div class="color" style="background-color: var(--color__neutral--900);"></div>
                <div class="color" style="background-color: var(--color__neutral--950);"></div>
            </div>
        </div>
        
        <div class="stack">
            <span class="caption">Primary</span>
    
            <div class="bar">
                <div class="color" style="background-color: var(--color__primary--50);"></div>
                <div class="color" style="background-color: var(--color__primary--100);"></div>
                <div class="color" style="background-color: var(--color__primary--200);"></div>
                <div class="color" style="background-color: var(--color__primary--300);"></div>
                <div class="color" style="background-color: var(--color__primary--400);"></div>
                <div class="color" style="background-color: var(--color__primary--500);"></div>
                <div class="color" style="background-color: var(--color__primary--600);"></div>
                <div class="color" style="background-color: var(--color__primary--700);"></div>
                <div class="color" style="background-color: var(--color__primary--800);"></div>
                <div class="color" style="background-color: var(--color__primary--900);"></div>
                <div class="color" style="background-color: var(--color__primary--950);"></div>
            </div>
        </div>
        
        <div class="stack">
            <span class="caption">Accent</span>
    
            <div class="bar">
                <div class="color" style="background-color: var(--color__accent--50);"></div>
                <div class="color" style="background-color: var(--color__accent--100);"></div>
                <div class="color" style="background-color: var(--color__accent--200);"></div>
                <div class="color" style="background-color: var(--color__accent--300);"></div>
                <div class="color" style="background-color: var(--color__accent--400);"></div>
                <div class="color" style="background-color: var(--color__accent--500);"></div>
                <div class="color" style="background-color: var(--color__accent--600);"></div>
                <div class="color" style="background-color: var(--color__accent--700);"></div>
                <div class="color" style="background-color: var(--color__accent--800);"></div>
                <div class="color" style="background-color: var(--color__accent--900);"></div>
                <div class="color" style="background-color: var(--color__accent--950);"></div>
            </div>
        </div>
        
        <div class="stack">
            <span class="caption">Success</span>
    
            <div class="bar">
                <div class="color" style="background-color: var(--color__success--50);"></div>
                <div class="color" style="background-color: var(--color__success--100);"></div>
                <div class="color" style="background-color: var(--color__success--200);"></div>
                <div class="color" style="background-color: var(--color__success--300);"></div>
                <div class="color" style="background-color: var(--color__success--400);"></div>
                <div class="color" style="background-color: var(--color__success--500);"></div>
                <div class="color" style="background-color: var(--color__success--600);"></div>
                <div class="color" style="background-color: var(--color__success--700);"></div>
                <div class="color" style="background-color: var(--color__success--800);"></div>
                <div class="color" style="background-color: var(--color__success--900);"></div>
                <div class="color" style="background-color: var(--color__success--950);"></div>
            </div>
        </div>
        
        <div class="stack">
            <span class="caption">Warning</span>
    
            <div class="bar">
                <div class="color" style="background-color: var(--color__warning--50);"></div>
                <div class="color" style="background-color: var(--color__warning--100);"></div>
                <div class="color" style="background-color: var(--color__warning--200);"></div>
                <div class="color" style="background-color: var(--color__warning--300);"></div>
                <div class="color" style="background-color: var(--color__warning--400);"></div>
                <div class="color" style="background-color: var(--color__warning--500);"></div>
                <div class="color" style="background-color: var(--color__warning--600);"></div>
                <div class="color" style="background-color: var(--color__warning--700);"></div>
                <div class="color" style="background-color: var(--color__warning--800);"></div>
                <div class="color" style="background-color: var(--color__warning--900);"></div>
                <div class="color" style="background-color: var(--color__warning--950);"></div>
            </div>
        </div>
        
        <div class="stack">
            <span class="caption">Danger</span>
    
            <div class="bar">
                <div class="color" style="background-color: var(--color__danger--50);"></div>
                <div class="color" style="background-color: var(--color__danger--100);"></div>
                <div class="color" style="background-color: var(--color__danger--200);"></div>
                <div class="color" style="background-color: var(--color__danger--300);"></div>
                <div class="color" style="background-color: var(--color__danger--400);"></div>
                <div class="color" style="background-color: var(--color__danger--500);"></div>
                <div class="color" style="background-color: var(--color__danger--600);"></div>
                <div class="color" style="background-color: var(--color__danger--700);"></div>
                <div class="color" style="background-color: var(--color__danger--800);"></div>
                <div class="color" style="background-color: var(--color__danger--900);"></div>
                <div class="color" style="background-color: var(--color__danger--950);"></div>
            </div>
        </div>
        
        <div class="stack">
            <span class="caption">Info</span>
    
            <div class="bar">
                <div class="color" style="background-color: var(--color__info--50);"></div>
                <div class="color" style="background-color: var(--color__info--100);"></div>
                <div class="color" style="background-color: var(--color__info--200);"></div>
                <div class="color" style="background-color: var(--color__info--300);"></div>
                <div class="color" style="background-color: var(--color__info--400);"></div>
                <div class="color" style="background-color: var(--color__info--500);"></div>
                <div class="color" style="background-color: var(--color__info--600);"></div>
                <div class="color" style="background-color: var(--color__info--700);"></div>
                <div class="color" style="background-color: var(--color__info--800);"></div>
                <div class="color" style="background-color: var(--color__info--900);"></div>
                <div class="color" style="background-color: var(--color__info--950);"></div>
            </div>
        </div>        
    </div>

    <div class="font">
        <span style="font-family: var(--typography__font_family--sans);">The quick brown fox jumps over the lazy dog.</span>

        <div class="font-size">            
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--xs);">Font Size: xs</span>
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--sm);">Font Size: sm</span>
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--md);">Font Size: md</span>
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--lg);">Font Size: lg</span>
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--xl);">Font Size: xl</span>
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--2xl);">Font Size: 2xl</span>
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--3xl);">Font Size: 3xl</span>
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--4xl);">Font Size: 4xl</span>
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--5xl);">Font Size: 5xl</span>
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--6xl);">Font Size: 6lx</span>
        </div>
        <div class="font-size">            
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--md); font-weight: var(--typography__font_weight--regulary);">Font Weight: regular</span>
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--md); font-weight: var(--typography__font_weight--medium);">Font Weight: medium</span>
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--md); font-weight: var(--typography__font_weight--semibold);">Font Weight: semibold</span>
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--md); font-weight: var(--typography__font_weight--bold);">Font Weight: bold</span>
            <span style="font-family: var(--typography__font_family--sans); font-size: var(--typography__font_size--md); font-weight: var(--typography__font_weight--extrabold);">Font Weight: extrabold</span>
        </div>
    </div>
</div>
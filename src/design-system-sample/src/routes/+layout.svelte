<script lang="ts">
	import { page } from '$app/stores';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	
</script>

<style lang="scss">
    div.main {
        display: grid;
        grid-template-rows: 85px 1fr;
    }
    
        .header {
            display: grid;
            grid-template-rows: 1fr auto;
        
            font-size: 2rem;
        
            align-content: center;
            text-align: center;
        
            border-bottom-color: #454d53;
            border-bottom-style: solid;
            border-bottom-width: 1px;

            padding: .4rem;
        }
    
        .content {
            padding: .4rem;
        }

    nav.menu {
        display: grid;
        grid-template-columns: auto auto auto 1fr;
        gap: .8rem;
    }

    a.menu_item {
        font-size: 1rem;

        cursor: pointer;

        padding: .2rem;
        border-radius: 4px;
        
        color: #e8eaec;

        text-decoration: none;
    }

        a.menu_item:hover {
            color: #b4babf;
        }
    
        a.menu_item[selected] {
            background-color: #e9571c;
            color: #090b0d;
        }
</style>

<svelte:head>
	<link rel="icon" href={favicon} />
	
	<link rel="stylesheet" href="/css/reset.css" />
	<link rel="stylesheet" href="/css/styles.css" />
</svelte:head>

<div class="main">  
  <div class="header">
      <span>Ironyx Design System</span>
      <nav class="menu">
          <a class="menu_item" selected={$page.url.pathname === '/primitive'} href="/primitive">Primitive</a>
          <a class="menu_item" selected={$page.url.pathname === '/semantic'} href="/semantic">Semantic</a>
          <a class="menu_item" selected={$page.url.pathname === '/components'} href="/components">Components</a>
      </nav>
  </div>  

  <div class="content">
      {@render children()}      
  </div>
</div>

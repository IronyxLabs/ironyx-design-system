<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<style lang="scss">
    div.main {
        display: grid;
        grid-template-rows: 85px 1fr;
    }
    
        .header {
            font-size: 2rem;
        
            align-content: center;
            text-align: center;
        
            border-bottom-color: #454d53;
            border-bottom-style: solid;
            border-bottom-width: 1px;
        }
    
        .content {
            padding: .4rem;
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
  </div>  

  <div class="content">
      {@render children()}      
  </div>
</div>

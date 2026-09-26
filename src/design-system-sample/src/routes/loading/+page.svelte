<script lang="ts">
    import { ButtonVariant, IxButton, IxLoadingSpinner, LoaderService } from '@ironyxlabs/design-system'

    const loaderService = new LoaderService();

    let spinnerShown = false;
    
    function showOrHideSpinner(): void {
      if (spinnerShown)
      {
        loaderService.hide('spinner');
      }
      else {        
        loaderService.show('spinner');
      }

      spinnerShown = !spinnerShown;
    }
</script>

<div class="container">
    <div class="spinner">
        <span class="heading__h4">Spinner</span>
        <IxButton variant={ButtonVariant.Secondary} onclick={showOrHideSpinner}>Show/Hide</IxButton>
        <IxLoadingSpinner key="spinner"></IxLoadingSpinner>
    </div>
</div>

<style lang="scss">
    div {
        &.container {
            display: grid;
            grid-template-columns: auto 1fr;
            row-gap: var(--spacing--2);

            justify-items: center;
        }

        &.spinner {
            display: grid;
            grid-template-rows: auto auto auto;
            row-gap: var(--spacing--2);
        }
    }
</style>
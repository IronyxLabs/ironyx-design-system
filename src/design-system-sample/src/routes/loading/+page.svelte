<script lang="ts">
	import {
		ButtonVariant,
		IxButton,
		IxLoadingBar,
		IxLoadingSpinner,
		LoaderService
	} from '@ironyxlabs/design-system';

	const loaderService = new LoaderService();

	let spinnerShown = false;
	let barShown = false;

	function showOrHideSpinner(): void {
		if (spinnerShown) {
			loaderService.hide('spinner');
		} else {
			loaderService.show('spinner');
		}

		spinnerShown = !spinnerShown;
	}

	function showOrHideBar(): void {
		if (barShown) {
			loaderService.hide('bar');
		} else {
			loaderService.show('bar');
		}

		barShown = !barShown;
	}
</script>

<div class="container">
	<div class="spinner">
		<span class="heading__h4">Spinner</span>
		<IxButton variant={ButtonVariant.Secondary} onclick={showOrHideSpinner}>Show/Hide</IxButton>
		<IxLoadingSpinner key="spinner"></IxLoadingSpinner>
	</div>

	<div class="bar">
		<span class="heading__h4">Bar</span>
		<IxButton variant={ButtonVariant.Secondary} onclick={showOrHideBar}>Show/Hide</IxButton>
		<IxLoadingBar key="bar"></IxLoadingBar>
	</div>
</div>

<style lang="scss">
	div {
		&.container {
			display: grid;
			grid-template-columns: auto 400px 1fr;
			column-gap: var(--spacing--2);

			justify-items: center;
		}

		&.spinner {
			display: grid;
			grid-template-rows: auto auto auto;
			row-gap: var(--spacing--2);
		}

		&.bar {
			display: grid;
			grid-template-rows: auto auto auto;
			row-gap: var(--spacing--2);

			width: 100%;
		}
	}
</style>

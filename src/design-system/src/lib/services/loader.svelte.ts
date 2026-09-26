export class Loader {
	private _activationCounter = $state(0);

	isActive = $derived(this._activationCounter !== 0);

	activate(): void {
		this._activationCounter++;
	}

	deactivate(): void {
		this._activationCounter--;
	}
}

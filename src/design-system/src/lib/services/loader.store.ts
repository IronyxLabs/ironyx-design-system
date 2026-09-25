import { Loader } from './loader.svelte.js';

export class LoaderStore {
	private readonly _loaders = new Map<string, Loader>();

	public provide(key: string = '') {
		let result = this._loaders.get(key);
		if (!result) {
			result = new Loader();
			this._loaders.set(key, result);
		}

		return result;
	}
}

export const loaderStore = new LoaderStore();

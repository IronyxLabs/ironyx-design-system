import { loaderStore } from './loader.store.ts';

export class LoaderService {
	public show(key: string = '') {
		const loader = loaderStore.provide(key);
		loader.activate();
	}

	public hide(key: string = '') {
		const loader = loaderStore.provide(key);
		loader.deactivate();
	}

	public async loadAsync<T>(action: () => T | Promise<T>, key: string = '') {
		try {
			loaderStore.provide(key).activate();

			return await action();
		} finally {
			loaderStore.provide(key).deactivate();
		}
	}
}

import { faker } from '@faker-js/faker';
import type { OptionModel } from '../components/select/option_model.ts';

export class OptionModelFaker {
	public static random(): OptionModel {
		return {
			id: faker.number.int(),
			label: faker.string.alphanumeric(),
			disabled: faker.datatype.boolean()
		};
	}

	public static enabled(): OptionModel {
		const result = OptionModelFaker.random();
		result.disabled = false;

		return result;
	}
}

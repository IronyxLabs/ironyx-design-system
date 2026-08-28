<script lang="ts">
	import IxCard from '$lib/components/ix-card.svelte';
	import IxInput from '$lib/components/ix-input.svelte';
	import IxSelect from '$lib/components/ix-select.svelte';
	import { Field } from '$lib/form/field.svelte';
	import { Form } from '$lib/form/form';
	import { gender } from '$lib/models/gender-enum';
	import { EmptyValidator } from '$lib/validators/empty-validator';

	const form: Form = $state(
		new Form({
			name: new Field<string>(new EmptyValidator("Name is mandatory")),
			gender: new Field<gender>(),
			birthplace: new Field<number>()
		})
	);

	const cities = [
		{ id: 1, label: 'Budapest' },
		{ id: 2, label: 'Debrecen' },
		{ id: 3, label: 'Szeged' },
		{ id: 4, label: 'Miskolc' }
	];

	const genders = [
		{ id: gender.male, label: 'Male' },
		{ id: gender.female, label: 'Female' }
	];
</script>

<div class="main">
	<IxCard>
		<div class="personal_info">
			<span class="heading__h4">Personal Information</span>

			<div class="form">
				<IxInput bind:field={form.fields.name}></IxInput>
				<IxSelect options={genders} bind:field={form.fields.gender}></IxSelect>
				<IxSelect options={cities} bind:field={form.fields.birthplace}></IxSelect>
			</div>
		</div>
	</IxCard>

	<IxCard>
		Name: {form.fields.name.value} - {form.fields.name.validationState.error}<br />
		Gender: {form.fields.gender.value}<br />
		Birthplace: {form.fields.birthplace.value}

		<br /><br />IsValid: {form.isValid()}
	</IxCard>
</div>

<style lang="scss">
	div.main {
		display: grid;
		grid-template-rows: auto 1fr;
		gap: 16px;

		height: 100%;
		width: 100%;
	}

	div.personal_info {
		display: grid;
		grid-template-rows: auto 1fr;
		gap: 16px;
	}

	div.form {
		display: grid;
		grid-template-rows: auto, auto, auto;
		gap: 8px;
	}
</style>

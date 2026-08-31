<script lang="ts">
    import { Field, Form, IxField, IxInput, IxSelect, IxButton, RequiredValidator, ButtonVariant } from '@ironyx/design-system';
	import IxCard from '$lib/components/ix-card.svelte';
	import { gender } from '$lib/models/gender-enum';

	const form: Form<{name: Field<string>, gender: Field<gender>, birthplace: Field<number>}> = $state(
		new Form({
			name: new Field<string>({ validators: [new RequiredValidator<string>("Name is mandatory") ] }),
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
			    <IxField label="Name" bind:field={form.fields.name} required={true} hint="Full name of the person">
					<IxInput></IxInput>							
				</IxField>
				<IxField label="Gender" bind:field={form.fields.gender} hint="Gender of the person" disabled={!form.isValid}>
				    <IxSelect options={genders}></IxSelect>				
				</IxField>
				<IxField label="Birthplace" bind:field={form.fields.birthplace} disabled={!form.isValid}>
				    <IxSelect options={cities}></IxSelect>				
				</IxField>

				<IxButton variant={ButtonVariant.Primary} disabled={!form.isValid} onclick={() => console.log("Save OnClick")}>Save</IxButton>
			</div>
		</div>
	</IxCard>

	<IxCard>
		Name: {form.fields.name.value} - {form.fields.name.validationState.error}<br />
		Gender: {form.fields.gender.value}<br />
		Birthplace: {form.fields.birthplace.value}

		<br /><br />IsValid: {form.isValid}
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
		grid-template-rows: auto auto auto auto;
		gap: 16px;
	}
</style>

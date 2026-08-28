<script lang="ts">
	import IxCard from "$lib/components/ix-card.svelte";
	import IxInput from "$lib/components/ix-input.svelte";
	import IxSelect from "$lib/components/ix-select.svelte";
	import { gender } from "$lib/models/gender-enum";

    const model: {
      name: string,
      gender: gender,
      birthplace: number
    } = {name: '', gender: gender.male, birthplace: 1}

    const cities = [
      { id: 1, label: 'Budapest' },
      { id: 2, label: 'Debrecen' },
      { id: 3, label: 'Szeged' },
      { id: 4, label: 'Miskolc' }
    ]

    const genders = [
      { id: gender.male, label: "Male" },      
      { id: gender.female, label: "Female" }
    ]
</script>

<style lang="scss">
    div.main {
        display: grid;
        grid-template-rows: auto 1fr;
        gap: 16px;

        height: 100%;
        width: 100%;
    }

    
</style>

<div class="main">
    <IxCard>
        <div>
            <span class="heading__h4">Personal Information</span>

            <IxInput></IxInput>
            <IxSelect options={genders}></IxSelect>
            <IxSelect options={cities}></IxSelect>
        </div>
    </IxCard>
</div>
<script>
	import Toggle from '$lib/base/ButtonToggle.svelte';
	export let name = 'name';
	export let enabled = true;
	export let volume = 50;
	export let travel = true;
	export let info = '';
	export let allowed = true;
	export let outputting = true;
	export let night = false;

	// $: conditionalVolume = volume;
	// $: {

	// 	if (outputting) {
	// 		conditionalVolume = volume;
	// 	} else conditionalVolume = 0;
	// }
</script>

<div class="speaker">
	<div class="input">
		<div class="title">{name}</div>
	</div>
	<div class="input">
		<input
			type="range"
			min="0"
			max="100"
			step="1"
			bind:value={volume}
			class="slider"
			id="myRange"
		/>
		<div class="volumePercentage">{volume}%</div>
	</div>
	<div class="input">
		<div class="indicator">
			{#if night}
				<iconify-icon icon="tabler:moon-stars" />
			{:else if outputting}
				{#if volume == 0}
					<iconify-icon icon="tabler:volume-3" />
				{:else if volume < 50}
					<iconify-icon icon="tabler:volume-2" />
				{:else}
					<iconify-icon icon="tabler:volume" />
				{/if}
			{:else}
				<iconify-icon icon="tabler:volume-off" />
			{/if}
		</div>
		<Toggle icon="device-speaker" iconToggle="device-speaker-off" toggleState={enabled} />

		<Toggle icon="directions" iconToggle="directions-off" toggleState={travel} />
	</div>
	<div>{info}</div>
</div>

<style>
	.speaker {
		display: flex;
		flex-direction: column;
		gap: 12px;
		border-radius: var(--borderRadius);
		background-color: var(--darker);
		/* border-width:2px;
    border-style:solid; */
		height: min-content;
		padding: 12px;
	}
	.title {
		color: var(--accent-light);
		font-size: 1.2em;
		width: 50%;
		text-transform: capitalize;
	}

	.input {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	input[type='range'] {
		width: 100%;
		appearance: none;
		background: transparent;
		cursor: pointer;
	}
	input[type='range']::-webkit-slider-runnable-track {
		-webkit-appearance: none;
		background-color: var(--dark);
		border-radius: 1000vw;
		height: 20px;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: var(--accent);
		width: 20px;
		height: 20px;
		border-radius: 1000vw;
	}

	/* input[type=checkbox]{

    appearance: none;
  background: var(--darker);
  cursor: pointer;
  width:40px;
  aspect-ratio: 1/1;
 } */

	.indicator {
		height: 100%;
		display: flex;
		aspect-ratio: 1/1;
		justify-content: center;
		align-items: center;
		color: var(--accent);
		font-size: 1.5em;
	}
	.volumePercentage {
		color: var(--accent);
		font-size: 0.8em;
		padding-left: 12px;
		font-weight: 600;
		width: 3em;
		text-align: right;
	}
</style>

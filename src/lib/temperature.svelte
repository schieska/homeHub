<script>
	import ButtonT from '$lib/base/ButtonToggle.svelte';
	var temperatureIcons = ['arrow-up', 'arrow-down', 'temperature'];
	$: programs = [
		{ iconOn: 'home-cancel', iconOff: 'home-off', active: true },
		{ iconOn: 'seeding', iconOff: 'seeding-off', active: false },
		{ iconOn: 'sofa', iconOff: 'sofa-off', active: false }
	];
	function switchProgram(x) {
		programs.forEach((element, y) => {
			element.active = false;
			if (x == y) {
				element.active = true;
			}
			console.log(element.active);
		});
	}
	var indoorIcon = temperatureIcons[1];
	$: temperature = 15;
</script>

<div class="temperature">
	<button class="indoor">
		<span>{temperature}°</span>
		<div class="indoorIcon">
			<iconify-icon icon="tabler:{indoorIcon}" />
		</div>
		<div class="scheduleIcon">
			<!-- <iconify-icon icon="tabler:calendar-off" /> -->
		</div>
	</button>
	<div class="fastActions">
		<div class="states">
			{#each programs as program, i}
				<ButtonT
					on:click={() => switchProgram(i)}
					bind:icon={program.iconOff}
					bind:iconToggle={program.iconOn}
					bind:toggleState={program.active}
				/>
			{/each}
		</div>
		<ButtonT icon="calendar-off" iconToggle="calendar" toggleState={false} />
	</div>
	<div class="outdoor" />
</div>

<style>
	.temperature {
		display: flex;
		justify-content: center;
		width: auto;
		height: auto;
		flex-direction: column;
		/* flex-grow:1; */
		-ms-flex-align: start;
		/* background: orange; */
	}
	.indoor {
		all: unset;
		display: flex;
		justify-content: center;
		margin: 0 var(--sidePadding);
		width: auto;

		border-radius: 1000vw;
		/* background:black; */
		border-style: solid;
		border-width: 2px;
		border-color: var(--dark);
		position: relative;
		transition: 0.2s;
	}
	.indoor:active {
		background-color: var(--dark);

		color: var(--accent-light);
		transition: 0.2s;
	}
	.indoor span {
		margin: 0.2em 0;
		font-size: 8em;
		color: var(--accent-light);
		text-align: center;
	}
	.indoorIcon {
		height: 100%;
		position: absolute;
		right: 0;
		top: 0;
		font-size: 2em;
		color: var(--accent);
		width: 35%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.scheduleIcon {
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		font-size: 2em;
		color: var(--accent);
		width: 35%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.fastActions {
		display: flex;
		width: auto;
		margin: 50px;
		justify-content: space-between;
		align-items: center;
	}

	.states {
		display: flex;
		width: auto;
		/* padding:50px; */
		justify-content: space-between;
		gap: 8px;
		background: var(--dark-l);
		border-radius: 100vw;
		padding: 8px;
	}
</style>

<script lang="ts">
	import Clock from '$lib/clock/clock.svelte';
	import Player from '$lib/mediaPlayer.svelte';
	import Calendar from '$lib/calendar.svelte';
	import Temperature from '$lib/temperature.svelte';
	import TeleTales from '$lib/tell-tales.svelte';
</script>

<div class="container">
	<div class="sub">
		<TeleTales />
		<Clock />
		<Temperature />
	</div>
	<!-- <Calendar /> -->
	<Player />
</div>

<style>
	.container {
		background: var(--darkest);
		width: 100vw;
		height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		justify-content: space-between;
		overflow: hidden;
		box-sizing: border-box;
		padding-bottom: 44px;
		/* gap: 20px; */
		/* display: grid; */
		/* grid-template-rows: 200px repeat(3, 1fr); */
	}
	.sub {
		display: flex;
		flex-direction: column;
		gap: 100px;
	}
</style>

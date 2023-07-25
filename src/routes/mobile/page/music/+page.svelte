<script lang="ts">
	import Clock from '$lib/clock/clock.svelte';
	import Player from '$lib/mediaPlayer.svelte';
	import Calendar from '$lib/calendar.svelte';
	import Temperature from '$lib/temperature.svelte';
	import TeleTales from '$lib/tell-tales.svelte';
	import Menu from '$lib/mobile/menu.svelte';
</script>

<div class="container">
	<div class="selection">
		<Player />
	</div>
	<menu />
</div>

<style>
	.container {
		
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		overflow: hidden;
		box-sizing: border-box;
		/* gap: 20px; */
		/* display: grid; */
		/* grid-template-rows: 200px repeat(3, 1fr); */
	}
	.selection {
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		overflow: hidden;
		box-sizing: border-box;
	}
</style>

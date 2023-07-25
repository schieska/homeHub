<script>
    import { data } from '$lib/dataStore.js';
	import Button from '$lib/base/ButtonMoment.svelte';
	import Toggle from '$lib/base/ButtonToggle.svelte';
	import Scanner from '$lib/barcodeScanner.svelte';
	import Marquee from '$lib/base/marquee.svelte';

    let boodschappen;
	const unsubscribe = data.subscribe((value) => {
		boodschappen = value.boodschappen;
	});
</script>

<div class="module">
	<div class="list">
        {#each boodschappen as boodschap}
		<div class="listItem">
			<Toggle icon="notes-off" iconToggle="notes" toggleState={boodschap.crossedOut} />
			<Marquee><div class="text {boodschap.crossedOut ? "crossed" : ""}" >{boodschap.title}</div></Marquee>

			<Button icon="x"/>
		</div>
        {/each}
		<div class="input">
			<input />
			<!-- <Button icon="barcode" /> -->
		</div>
	</div>
</div>
<Scanner />

<style>
	.module {
		padding: 0 var(--sidePadding);
		width: auto;
		z-index: 2;
		max-width: 100vw;
	}
	.list {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.listItem {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 8px;
	}
	.text {
		color: var(--accent-light);
		font-size: 1.3em;
		text-transform: capitalize;
	}
    .crossed{
        text-decoration: line-through;
        color: var(--accent-dark)
    }
	.input {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
	}
	input {
		appearance: none;
		background: none;
		margin: 0 auto;
		padding-left: 24px;
		width: 100%;
		height: 3em;
		border-radius: 1000vw;
		border-style: solid;
		border-width: 2px;
		border-color: var(--dark);
		color: var(--accent-light);
		font-size: 1.3em;
		text-transform: capitalize;
	}
	input:active,
	input:focus {
		outline: none;
	}
</style>

<script>
	import ButtonT from '$lib/base/ButtonToggle.svelte';
	export var toggle = false;
	function open() {
		toggle = !toggle;
		console.log('volume');
	}
</script>

<div class="volumeSlider">
	<ButtonT icon="volume" iconToggle="volume" on:click={() => open()} toggleState={toggle} />
	<div class="slider {toggle ? '' : 'hidden'}" />
</div>

<style>
	.volumeSlider {
		position: relative;
	}
	.slider {
		bottom: calc(3.5em + 20px);
		right: 0;
		position: absolute;
		height: 400px;
		width: 3.5em;
		background-color: var(--darkest);
		font-size: 1.5rem;
		border-radius: 1000vw;
		border-style: solid;
		border-width: 2px;
		color: var(--dark);
		transition: 1s;
	}
	.hidden {
		height: 3.5em;
		bottom: 0;
		opacity: 0;
	}
</style>

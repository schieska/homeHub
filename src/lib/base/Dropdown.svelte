<script lang js>
	import ButtonM from '$lib/base/ButtonMoment.svelte';
	export var selected = 0;
	export var dropdownContent = ['test', 'test2', 'test3'];
	var opened = false;

	function select(i) {
		opened = false;
		selected = i;
	}
	function open() {
		opened = true;
	}
	function close() {
		opened = false;
	}
</script>

<ButtonM on:click={() => open()} label={dropdownContent[selected]} size="small" dark={true} />
<div class="containerOuter">
	<div class="container {opened ? '' : 'hidden'}">
		<div class="selection">
			{#each dropdownContent as content, i}
				<button on:click={(event) => select(i)}
					>{#if i == selected}<div class="indicator" />{/if}{content}{#if i == selected}<div
							class="buffer"
						/>{/if}</button
				>
			{/each}
		</div>
	</div>
</div>

<style>
	.indicator {
		background: var(--accent-light);
		width: 12px;
		height: 12px;
		border-radius: 1000vw;
	}
	.buffer {
		width: 12px;
		height: 12px;
	}
	.container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100dvh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.5);

		opacity: 1;
		transform: translateX(0%);
		transition: opacity 0.5s transform 0s;
		transition-delay: transform 1s;
		pointer-events: all;
	}
	.containerOuter {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100dvh;
		overflow: hidden;
		pointer-events: none;
		z-index: 10;
	}
	.hidden {
		opacity: 0;
		transform: translateX(100%);
		transition: opacity 0.5s transform 0s;
		transition-delay: transform 1s;
	}

	.selection {
		/* display:none; */
		background: var(--dark);
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		width: 380px;
		/* gap:2px; */
		/* border-style: solid;
		border-width: 2px;*/
		border-radius: var(--borderRadius);
		color: var(--dark);
		transition: 0.5s;
		overflow: hidden;
	}

	.hidden .selection {
		opacity: 0;
		transform: translateY(-10%);
	}

	button {
		all: unset;
		color: var(--accent);
		box-sizing: border-box;
		/* width: 3.5em; */
		height: 3.5em;
		/* border-radius: var(--borderRadius) var(--borderRadius) 0 0; */
		text-align: center;

		border-color: var(--accent-dark);
		border-style: solid;
		border-width: 0 0 2px 0;
		justify-content: space-around;
		align-items: center;
		transition: 0.2s;
		font-size: 1.5rem;
		/* padding: 0 3em; */
		width: 100%;
		display: flex;
	}
	button:first-child {
		border-radius: var(--borderRadius) var(--borderRadius) 0 0;
	}
	button:last-child {
		border-radius: 0 0 var(--borderRadius) var(--borderRadius);
		border-style: hidden;
	}
	button:active {
		background-color: var(--accent);
		color: var(--accent-light);
	}
</style>

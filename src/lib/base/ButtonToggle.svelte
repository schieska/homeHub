<script lang ts>
	import { escape_object } from 'svelte/internal';

	export var icon = '--unset--';
	export var iconToggle = '--unset--';
	export var label = '--unset--';
	export var dark = true;
	export var fullwidth = false;
	export var size = 'normal';
	export var outline = true;
	export var toggleState = true;
	let buttonProps = {
		class: [$$restProps.class]
	};
</script>

<label class="toggler-wrapper">
	<div
		class="content {size} {dark ? '' : 'dark'}"
		style=" {label != '--unset--' ? 'padding: 0 3em;' : ' padding:0; aspect-ratio:1/1'}
	{fullwidth ? 'width:auto;' : ''}"
	>
		<div class="toggler {outline ? 'outline' : ''}">
			{#if toggleState}
				<iconify-icon icon="tabler:{icon}" />
			{:else}
				<iconify-icon icon="tabler:{iconToggle}" />
			{/if}
		</div>
		{#if label != '--unset--'}
			<span>{label}</span>
		{/if}
	</div>
	<input type="checkbox" bind:checked={toggleState}  />
</label>

<style>
	label {
		border: none;
		border-style: hidden;
		border-radius: 1000vw;
	}

	.large {
		font-size: 2rem;
	}
	.normal {
		font-size: 1.5rem;
	}
	.small {
		font-size: 1rem;
		height: 2em;
	}
	.dark {
		border-color: var(--accent);
	}
	.dark:active {
		background-color: var(--accent);
	}
	.toggler {
		all: unset;
		--color1: var(--dark);
		color: var(--accent);
		display: flex;
		box-sizing: border-box;
		min-width: 3em;
		min-width: calc(((100vw - 80px) / 4) - 16px);
		min-height: calc(((100vw - 80px) / 4) - 16px);

		border-radius: 1000vw;
		text-align: center;
		border-color: var(--color1);
		border-style: none;

		justify-content: center;
		align-items: center;
		transition: 0.2s;
		gap: 0.4em;
	}
	.outline {
		/* border-style: solid; */
		border-width: 2px;
		border-style: solid;
		/* border-radius: 1000vh; */
	}
	/* button iconify-icon {
		transform: translateY(0.1em);
	} */

	input {
		appearance: none;
		display: none;
	}
	.toggler:active {
		background-color: var(--color1);
		color: var(--accent-light);
	}
	.selected {
		background-color: var(--color1);
		color: var(--accent-light);
	}
	.toggler-wrapper {
		border: hidden;
	}
</style>

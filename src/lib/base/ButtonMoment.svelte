<script lang js>
	import { escape_object } from 'svelte/internal';

	export var icon = '--unset--';
	export var label = '--unset--';
	export var dark = true;
	export var fullwidth = false;
	export var size = 'normal';
	export var outline = true;

	let buttonProps = {
		class: [$$restProps.class]
	};
</script>

<button
	on:click
	{...buttonProps}
	class="{size} {!dark ? 'dark' : ' '} {outline ? 'outline' : ''}"
	style=" {label != '--unset--' ? 'padding: 0 3em;' : ' padding:0; aspect-ratio:1/1'}
            {fullwidth ? 'width:auto;' : ''}
        "
>
	{#if icon != '--unset--'}
		<iconify-icon icon="tabler:{icon}" />
	{/if}
	{#if label != '--unset--'}
		<span>{label}</span>
	{/if}
</button>

<style>
	.large {
		font-size: 2rem;
	}
	.normal {
		font-size: 1.5rem;
	}
	.small {
		font-size: 1rem;
		height: 3em;
	}
	.dark {
		border-color: var(--accent);
	}
	.dark:active {
		background-color: var(--accent);
	}
	button {
		all: unset;
		--color1: var(--dark);
		color: var(--accent);
		display: flex;
		box-sizing: border-box;
		min-width: 3em;
		min-width: calc(((100vw - 80px) / 4) - 16px);

		border-radius: 1000vw;
		text-align: center;
		border-color: var(--color1);
		border-style: hidden;
		justify-content: center;
		align-items: center;
		transition: 0.2s;
		gap: 0.4em;
	}
	.outline {
		border-style: solid;
		border-width: 2px;
	}
	/* button iconify-icon {
		transform: translateY(0.1em);
	} */
	button:active {
		background-color: var(--color1);
		color: var(--accent-light);
	}
</style>

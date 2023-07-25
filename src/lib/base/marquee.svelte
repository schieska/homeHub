<script lang js>
	import { onMount, onDestroy, afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';

	let marqueeWidth;
	let marqueeContentWidth;
	let content;
	let oversized = false;
	let animationSpeed = 5;
	export let pixelsPerSecond = 25;

	const handleSlotChange = () => {
		animationSpeed = content.clientWidth / pixelsPerSecond;
		if (marqueeWidth.clientWidth < marqueeContentWidth.clientWidth) {
			oversized = true;
		} else {
			oversized = false;
		}
	};
	if (typeof window !== 'undefined') {
		onMount(() => {
			handleSlotChange();
			const slot = document.querySelector('slot');
			if (slot) {
				slot.addEventListener('slotchange', handleSlotChange);
			}
		});

		afterUpdate(() => {
			handleSlotChange();
		});

		onDestroy(() => {
			const slot = document.querySelector('slot');
			if (slot) {
				slot.removeEventListener('slotchange', handleSlotChange);
			}
		});
	}
</script>

<div class="marquee {oversized ? 'falloff' : ''}" bind:this={marqueeWidth}>
	<div
		class="marqueeContent {oversized ? 'marqueeAnimate' : ''}"
		bind:this={marqueeContentWidth}
		style="animation-duration:{animationSpeed}s;"
	>
		<div class="float" transition:fade on:change={handleSlotChange} bind:this={content}>
			<slot />
		</div>
		{#if oversized}
			<div class="float" transition:fade>
				<slot />
			</div>
		{/if}
	</div>
</div>

<style>
	.float {
		float: left;
		width: min-content;
		padding-left: 1em;
		transform: translateX(-1em);
	}

	.marquee {
		white-space: nowrap;
		overflow: hidden;
		width: 100%;
	}

	.falloff {
		mask-image: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 1) 3%,
			rgba(0, 0, 0, 1) 95%,
			rgba(0, 0, 0, 0) 100%
		);
		-webkit-mask-image: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 1) 3%,
			rgba(0, 0, 0, 1) 95%,
			rgba(0, 0, 0, 0) 100%
		);
	}

	.marqueeContent {
		width: fit-content;
		white-space: nowrap;
		display: flex;
	}

	.marqueeAnimate {
		animation: marquee linear infinite;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>

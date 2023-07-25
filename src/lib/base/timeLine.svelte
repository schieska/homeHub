<script>
	export var leftText = '00:00';
	export var rightText = '00:00';

  import { onMount, onDestroy } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  export let currentPosition = 0;
  export let position = 0;
  export let duration = 500;

  const progress = tweened(0, { duration, easing: cubicOut });

  let interval;

  function smoothUpdate() {
    progress.set(0);
    progress.set(1);
  }

  onMount(() => {
    interval = setInterval(smoothUpdate, duration);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  </script>

<div class="track">
	<div class="progress" style="transform:translate(calc(-100% + {currentPosition}%" />
</div>
<div>
	<span class="text">{leftText}</span>
	<span class="text">{rightText}</span>
</div>

<style>
	.track {
		appearance: none;
		margin: 10px 0 10px;
		width: 100%;
		height: 20px;
		border-radius: 1000vw;
		background: var(--dark);
		overflow: hidden;
	}
	.progress {
		appearance: none;
		height: 20px;
		width: 100%;
		background: var(--accent);
		border-radius: 1000vw;
	}

	div {
		display: flex;
		justify-content: space-between;
	}
	.text {
		color: var(--accent);
	}
</style>
